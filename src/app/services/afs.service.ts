import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import Swal from 'sweetalert2';

import { ReservationItem } from '../Interfaces/reservationItem';
import { MallData } from '../Interfaces/MallData';
import { User } from '../Interfaces/User';

// FirestoreDataConverter


@Injectable({
  providedIn: 'root'
})
export class AfsService {
  // firestore collections
  allReservationsRef: AngularFirestoreCollection<ReservationItem>;
  allUsersRef: AngularFirestoreCollection<User>;
  allMallsDataRef: AngularFirestoreCollection<MallData>;

  // interface data
  users!: User[];
  currentLoggedInUser!: User;
  mAfs: AngularFirestore;

  // data from Firestore (any types are to handle auto converted data formats that firestore holds)
  currUser: any;


  constructor(private afs: AngularFirestore, private authService: AuthService) {
    // this.reservationsCollection = this.afs.collection('reservations');
    this.mAfs = afs
    this.allReservationsRef = this.mAfs.collection('reservations');
    this.allUsersRef = this.mAfs.collection('users');
    this.allMallsDataRef = this.mAfs.collection('mallsData');
    // this.userReservationHistoryRef = afs.collection('users').doc("reservationHistory");
    console.log("afs generated")
  }

  // GETTER METHODS (FIRESTORE REFERENCES)
  getReservationsRef() {
    return this.allReservationsRef;
  }

  getAllMallsDataRef(){
    return this.allMallsDataRef;
  }

  // for ADMIN, get all users
  getAllUsersRef() {
    return this.allUsersRef;
  }

  getUserRefByUid(uid: string){
    return this.allUsersRef.doc(uid);
  }


  // SETTER METHODS (FIRESTORE REFERENCES)
  // set User data, if doesnt exist, create mnew user data
  setNewUser(newUser: User): void {
    this.afs.collection("users").doc(newUser.UID).set(newUser).then(() => console.log("sucessfully created a new user"))
  }

  // adds a new reservation to reservationHistory
  addNewReservation(newReservation: ReservationItem, user: User): void {

    const AVAILABLE_DAYS = [0, 1, 3, 5]

    if (AVAILABLE_DAYS.includes(newReservation.reservationStartTime.getDay())){
      user.reservationHistory!.push(newReservation)

      this.afs.collection("users").doc(user.UID).update({"reservationHistory": user.reservationHistory}).then(
        () => Swal.fire({
          title:"Reservation Added Successfully",
          icon:"success",
          text:"Check your Active Bookings to see the reservation!"
        }).then(()=>{
          window.history.go(-1)
        })).catch(() => {
        Swal.fire({
          title:"An error has occured",
          icon:"error",
          text:"Please try and log in again.",
          footer:"If the problem persists, please email quickpark.hackathon@gmail.com"
        }).then(() => {
          window.location.reload()
        })
      })
    }
    else{
      Swal.fire({
        title:"Unable to reserve parking",
        icon:"error",
        text:"There are no available parking spaces at your desired time slot and duration, please select another duration or time slot."
      })
    }
  }


  // HELPER SERVICES
  convArrayObjToJavasciptObj(arr: any[]){
    const newArr = arr;
    newArr.map((elem)=> Object.assign({}, elem));
    // reservationStartTime: Object.assign({}, newReservation.reservationStartTime)
    return newArr;
  }
}
