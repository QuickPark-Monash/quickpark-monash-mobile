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
  allMallsDataRef: AngularFirestoreCollection<MallData>;
  users!: User[];
  currentLoggedInUser!: User;
  currUser: any;

  constructor(private afs: AngularFirestore) {
    // this.reservationsCollection = this.afs.collection('reservations');

    this.allReservationsRef = afs.collection('reservations');
    this.allUsersRef = afs.collection('users');
    this.allMallsDataRef = afs.collection('mallsData');
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
      reservedParking: Object.assign({}, newReservation.reservedParking),
      reservationTime: Object.assign({}, newReservation.reservationTime),
      reservationDuration: Object.assign({}, newReservation.reservationDuration)
    }
    
    console.log("before push")
    console.log(user.reservationHistory)
    console.log(user)
    // const newReservationHistory = user.reservationHistory!.push(newReservation)
    user.reservationHistory!.push(newReservationJsObj)
    console.log("after push")
    console.log(user.reservationHistory)
    
    // const userReservationHistory = user.reservationHistory!.map((obj)=> {return Object.assign({}, obj)});
    
    // this.afs.collection("users").doc(user.UID).set(Object.assign({}, user)).then(() => console.log("sucessfully set a new user object"))
    this.afs.collection("users").doc(user.UID).update({"reservationHistory": user.reservationHistory}).then(() => console.log("sucessfully added a new reservation"))
  }
}
