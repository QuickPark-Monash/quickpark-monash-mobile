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

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes.carPlateNo)
  // }

  confirmCheck(){
    return this.signUpPassword !== null && this.signUpPassword === this.confirmPass
  }

  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }

  signUp(){
    if(this.validSignUp()){
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
      // add the user data: displayName and carplate number
      // var currentUserUid = this.authService.getUID()
      // console.log(this.authService.getUID())
      // console.log(currentUserUid);
      // this.afsService.addNewUser(currentUserUID, newUserData);
      this.consoleLogStuff();
    }
    else{
      Swal.fire({
        title: "Invalid information entered",
        text: "Please verify that your credentials are correctly entered",
        icon:"error"
      })
      // this.clearForm();
    }
  }

  validSignUp(): boolean{
    return this.carPlateNo !== undefined
    && this.signUpPassword === this.confirmPass
    && this.displayName !== undefined
    && this.signUpPassword !== undefined
  }

  consoleLogStuff(){
    console.log(this.displayName);
    console.log(this.authService.currentUserUID);
  }

  clearForm(){
    this.displayName = "";
    this.emailAddress = "";
    this.carPlateNo= "";
    this.signUpPassword = "";
    this.confirmPass = "";
  }

}
