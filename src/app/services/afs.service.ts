// import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ReservationItem } from '../Interfaces/reservationItem';
import { MallData } from '../Interfaces/MallData';
import { User } from '../Interfaces/User';
import { AngularFireAuth } from '@angular/fire/auth';
// FirestoreDataConverter

@Injectable({
  providedIn: 'root'
})
export class AfsService {
  allReservationsRef: AngularFirestoreCollection<ReservationItem>;
  allUsersRef: AngularFirestoreCollection<User>;
  // reservations: Observable<any>; // Observable<Item[]>
  // allUsers: Observable<any>;
  // mallsData: Observable<any>;
  // for one user
  // currentUserReservation: Observable<any>
  currUser: any;

  constructor(private afs: AngularFirestore) {
    // this.reservationsCollection = this.afs.collection('reservations');

    this.allReservationsRef = afs.collection('reservations');
    this.allUsersRef = afs.collection('users');
    // this.userReservationHistoryRef = afs.collection('users').doc("reservationHistory");
    console.log("afs generated")
  }

  // GETTER METHODS (FIRESTORE REFERENCES)
  getReservationsRef() {
    return this.allReservationsRef;
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
    const newReservationHistory = user.reservationHistory!.push(newReservation)
    this.afs.collection("users").doc(user.UID).update({reservationHistory: newReservationHistory}).then(() => console.log("sucessfully added a new reservation"))
  }
}
