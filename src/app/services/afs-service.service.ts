import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ReservationItem } from '../Interfaces/reservationItem';

@Injectable({
  providedIn: 'root'
})
export class AfsServiceService {
  reservationsCollection!: AngularFirestoreCollection<ReservationItem>;
  reservations: Observable<any>; // Observable<Item[]>

  constructor(private afs: AngularFirestore) { 
    this.reservations = this.afs.collection('reservations').valueChanges();
    // this.malls = this.afs.collection('malls').valueChanges();
    console.log("afs generated")
  }

  getReservationItems(){
    return this.reservations;

  }

  

}
