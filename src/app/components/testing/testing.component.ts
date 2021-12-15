import { MOCK_RESERVATION_HISTORY } from './../../MockData/mockReservationHistory';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { User } from 'src/app/Interfaces/User';
import { AfsService } from '../../services/afs.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ParkingSpace } from 'src/app/Interfaces/ParkingSpace';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})

export class TestingComponent implements OnInit {
  reservations: ReservationItem[];
  users: User[];
  currUser!: User;
  currUserRef!: AngularFirestoreDocument<User>;
  modelUserId:number;

  constructor(private authService: AuthService,private afsService: AfsService) { 
    this.reservations = [];
    this.users = [];
    this.modelUserId = 0;
  }

  ngOnInit(): void {
    console.log('OnInit ran');
    this.afsService.getReservationsRef().valueChanges().subscribe((reservationItems: ReservationItem[]) => {
      // console.log(items);
      this.reservations = reservationItems;
    })
    this.afsService.getAllUsersRef().valueChanges().subscribe((users: User[]) => {
      this.users = users;
    })

    // set current user id and user object
    this.currUserRef = this.afsService.getUserRefByUid(this.authService.currentUserUID!);
    this.currUserRef.valueChanges().subscribe((user)=> this.currUser = user!)
  }

  addReservation(){
    var mockReservationItem: ReservationItem = MOCK_RESERVATION_HISTORY[0]
    mockReservationItem.carPlate = this.currUser.currentVehicle!.vehiclePlate;
    const newReservationItem: ReservationItem = mockReservationItem;
    
    this.afsService.addNewReservation(newReservationItem, this.currUser)
  }
}
