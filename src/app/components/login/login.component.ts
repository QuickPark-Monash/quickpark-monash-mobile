import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginEmail!: string;
  loginPassword!: string;
  signUpEmail!: string;
  signUpPassword!: string;

  showPassword: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.login(this.loginEmail, this.loginPassword);
  }

  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }

  // signUp(): void{
  //   console.log(this.signUpEmail)
  //   this.auth.createUserWithEmailAndPassword(this.signUpEmail, this.signUpPassword).then(()=>{
  //     Swal.fire({
  //       title: "Sign Up Successful",
  //       text: "You may log in now",
  //       icon: "success"
  //     })
  //   }).catch(()=>{
  //     Swal.fire({
  //       title: "Something went wrong",
  //       text: "You must provide a valid email and a password has to be at least 6 letters long",
  //       icon: "warning"
  //     })
  //   })
  // }
}
