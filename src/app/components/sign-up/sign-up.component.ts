import { Component, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { AfsService } from 'src/app/services/afs.service';
import Swal from 'sweetalert2';
import { StringValue } from 'vega';
import { Vehicle } from 'src/app/Interfaces/Vehicle';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // DEFAULT MOCKUP CONSTANTS
  DEFAULT_WALLET_BALANCE: number = 0;
  DEFAULT_POINTS_BALANCE: number = 0;
  DEFAULT_VEHICLE_NAME: string = "Mini Cooper Convertible";
  DEFAULT_PROFILE_PIC = "assets/profile_pics/zach-khong.png"
  DEFAULT_VEHICLE_IMG = "assets/profile_pics/zach-car.png";

  //Personal information
  displayName!: string;
  emailAddress!: string;

  //Account details
  carPlateNo!: string;
  signUpPassword!: string;
  confirmPass!: string;

  //Password visibility
  showPassword:boolean = false;

  constructor(private afsService: AfsService, private authService: AuthService) {
    // console.log(this.authService.currentUserUID)
  }

  ngOnInit(): void {
  }

  confirmCheck(){
    return this.signUpPassword !== null && this.signUpPassword === this.confirmPass
  }

  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }

  signUp(){
    if(this.validSignUp() === "Sign-Up Successful"){
      const newVehicle: Vehicle = {
        vehicleName: this.DEFAULT_VEHICLE_NAME,
        vehiclePlate: this.carPlateNo,
        vehicleImage: this.DEFAULT_VEHICLE_IMG,
      }
      const newUser: User = {
        UID: "", //non-null assertion
        displayName: this.displayName,
        profilePicture: this.DEFAULT_PROFILE_PIC,
        walletBalance: this.DEFAULT_WALLET_BALANCE, // on sign up
        pointsBalance: this.DEFAULT_POINTS_BALANCE,
        // carplate: string,
        currentVehicle: newVehicle,
        registeredVehicles: [newVehicle],
        reservationHistory: []
      }

      this.authService.signUp(this.emailAddress, this.signUpPassword, newUser);
    }
    else{
      Swal.fire({
        title: this.validSignUp(),
        text: "Please verify that your credentials are correctly entered",
        icon:"error"
      })
    }
  }

  validSignUp(): string{
    var response: string = "Sign-Up Successful";
    switch(true){

      case (this.displayName === undefined):
        response = "Display Name not entered";
        break;

      case (this.emailAddress === undefined):
        response = "Email Address not entered";
        break;

      case (this.carPlateNo === undefined):
        response = "Car Plate Number not entered";
        break;

      case (this.signUpPassword !== this.confirmPass):
        response = "Passwords do not match";
        break;

      case (this.signUpPassword === undefined):
        response = "Password not entered"
        break;
    }

    return response
  }

  clearForm(){
    this.displayName = "";
    this.emailAddress = "";
    this.carPlateNo= "";
    this.signUpPassword = "";
    this.confirmPass = "";
  }

}
