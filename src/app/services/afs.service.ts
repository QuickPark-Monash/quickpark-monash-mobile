// import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ReservationItem } from '../Interfaces/reservationItem';
import { MallData } from '../Interfaces/MallData';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AfsService {
  reservationsCollection!: AngularFirestoreCollection<ReservationItem>;
  reservations: Observable<any>; // Observable<Item[]>
  allUsers: Observable<any>;
  mallsData: Observable<any>;
  // for one user
  currentUserReservation: Observable<any>
  currUser: any;

  constructor(private afs: AngularFirestore) { 
    // this.reservationsCollection = this.afs.collection('reservations');

    // upon sign in, put UID here
    const uid = "0";
    this.currUser = this.afs.collection('users').doc(uid);
    this.reservations = this.afs.collection('reservations').valueChanges();
    this.allUsers = this.afs.collection('users').valueChanges();
    this.currentUserReservation = this.afs.collection('users').doc(this.currUser.uid).valueChanges();
    this.mallsData = this.afs.collection('mallsData').valueChanges();
    console.log("afs generated")
  }

  getReservationItems(){
    return this.reservations;
  }

  // for ADMIN, get all users
  getAllUsers(){
    return this.allUsers;
  }

  // only usable after sign-in
  getCurrentUserReservation(){
    return this.currentUserReservation;
  }

  
}
