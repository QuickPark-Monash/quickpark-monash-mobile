import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isLoggingIn = false;

  currentUserUID?: string;

  constructor(
    private auth: AngularFireAuth,
    private router: Router
    ) { }

  login(loginEmail: string, loginPassword:string): Promise<void>{
    this.isLoggingIn = true;
    return this.auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(
      (value) => {
        this.flipLogin()
        this.flipLoggingIn()
        this.setCurrentUser(value.user?.uid)
        this.router.navigate(["profile-page"])
      }
    ).catch(()=>{
      this.flipLoggingIn()
      Swal.fire({
        icon: "error",
        title: "An error has occured",
        text: "Invalid email address or password."
      })
    });
  }

  signUp(signUpEmail: string, signUpPassword:string): void{
    this.auth.createUserWithEmailAndPassword(signUpEmail,signUpPassword).then(()=>{
      Swal.fire({
        title: "Sign Up Successful",
        text: "You may log in now",
        icon: "success"
      }).then(() => {
        this.router.navigate(['login'])
      })
    }).catch(()=>{
      Swal.fire({
        title: "Something went wrong",
        text: "You must provide a valid email and a password has to be at least 6 letters long",
        icon: "warning"
      })
    })
  }

  flipLogin(): void{
    this.isLoggedIn = true
  }

  flipLoggingIn(): void{
    this.isLoggingIn = false
  }

  setCurrentUser(UID?: string):void{
    this.currentUserUID = UID
  }
}
