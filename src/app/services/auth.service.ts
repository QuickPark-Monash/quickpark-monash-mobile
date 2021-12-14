// import { AfsService} from 'src/app/services/itemservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import Swal from 'sweetalert2';
import { AfsService } from './afs.service';
import { Vehicle } from '../Interfaces/Vehicle';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isLoggingIn = false;

  currentUserUID?: string;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private afsService: AfsService
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
  // signUp(signUpEmail: string, signUpPassword:string, displayName: string, profilePicture:string,  walletBalance: number,currentVehicle: Vehicle,registeredVehicles: Vehicle[],reservationHistory: ReservationItem[]): void{
  //   this.auth.createUserWithEmailAndPassword(signUpEmail,signUpPassword)
  
  signUp(signUpEmail: string, signUpPassword:string, newUser: User): void{
    this.auth.createUserWithEmailAndPassword(signUpEmail,signUpPassword).then((value)=>{
      this.setCurrentUser(value.user?.uid)
      console.log(newUser);   // there is uid
      console.log(this.currentUserUID);   // there is uid
      console.log("pointsbalance new user:" + newUser.pointsBalance);   // there is uid
      newUser.UID = this.currentUserUID!
      this.afsService.setNewUser(newUser)
      Swal.fire({
        title: "Sign Up Successful",
        text: "You may log in now",
        icon: "success"
      }).then(() => {
        this.router.navigate([""])
      })
    }).catch(()=>{
      Swal.fire({
        title: "Something went wrong",
        text: "You must provide a valid email and a password has to be at least 6 letters long",
        icon: "warning"
      })
    })
  }

  getUID(){
    return this.currentUserUID;
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
