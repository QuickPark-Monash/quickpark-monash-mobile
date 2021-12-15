// import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ReservationItem } from '../Interfaces/reservationItem';
import { MallData } from '../Interfaces/MallData';
import { User } from '../Interfaces/User';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import Swal from 'sweetalert2';

// FirestoreDataConverter


@Injectable({
  providedIn: 'root'
})
export class AfsService {
  allReservationsRef: AngularFirestoreCollection<ReservationItem>;
  allUsersRef: AngularFirestoreCollection<User>;
  allMallsDataRef: AngularFirestoreCollection<MallData>;
  users!: User[];
  currentLoggedInUser!: User;
  currUser: any;
  mAfs: AngularFirestore;

  constructor(private afs: AngularFirestore) {
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
    // convert to pure javascript objects
    // https://stackoverflow.com/questions/48156234/function-documentreference-set-called-with-invalid-data-unsupported-field-val
    const newReservationJsObj = { ...newReservation,
      // reservationStartTime: Object.assign({}, newReservation.reservationStartTime)
    }
    // console.log("before push")
    // console.log(user.reservationHistory)
    // console.log(user)

    user.reservationHistory!.push(newReservation)

    // console.log("after push")
    // console.log(user.reservationHistory)

    // this.afs.collection("users").doc(user.UID).set(Object.assign({}, user)).then(() => console.log("sucessfully set a new user object"))
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


  // HELPER SERVICES
  convArrayObjToJavasciptObj(arr: any[]){
    const newArr = arr;
    newArr.map((elem)=> Object.assign({}, elem));
    // reservationStartTime: Object.assign({}, newReservation.reservationStartTime)
    return newArr;
  }
}
