import { Component, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { StringValue } from 'vega';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  //Personal information
  displayName!: string;
  emailAddress!: string;

  //Account details
  carPlateNo!: string;
  signUpPassword!: string;
  confirmPass!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.carPlateNo)
  }

  confirmCheck(){
    return this.signUpPassword !== null && this.signUpPassword === this.confirmPass
  }

  signUp(){
    if(this.validSignUp()){
      this.authService.signUp(this.emailAddress, this.signUpPassword)
    }
    else{
      Swal.fire({
        title: "Invalid information entered",
        text: "Please verify that your credentials are correctly entered",
        icon:"error"
      })
    }
  }

  validSignUp(): boolean{
    return this.carPlateNo !== undefined
    && this.signUpPassword === this.confirmPass
    && this.displayName !== undefined
    && this.signUpPassword !== undefined
  }

}
