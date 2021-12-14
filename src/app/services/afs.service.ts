import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ReservationItem } from '../Interfaces/reservationItem';

@Injectable({
  providedIn: 'root'
})
export class AfsService {
  reservationsCollection!: AngularFirestoreCollection<ReservationItem>;
  reservations: Observable<any>; // Observable<Item[]>
  allUsers: Observable<any>;

  constructor(private afs: AngularFirestore) { 
    // this.reservationsCollection = this.afs.collection('reservations');
    this.reservations = this.afs.collection('reservations').valueChanges();
    this.allUsers = this.afs.collection('users').valueChanges();
    // this.malls = this.afs.collection('malls').valueChanges();
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
    return this.reservations;
  }


}
