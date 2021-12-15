import { MallData } from 'src/app/Interfaces/MallData';
import { MOCK_MALL_DATA } from 'src/app/MockData/mockMallData';
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
  mallsData!: MallData[];
  mockMallsData: MallData[] = MOCK_MALL_DATA;
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


    // ONE TIME USE : add all mall data

    this.addMallData
  }

  addReservation(){
    var mockReservationItem: ReservationItem = MOCK_RESERVATION_HISTORY[0]
    mockReservationItem.carPlate = this.currUser.currentVehicle!.vehiclePlate;
    const newReservationItem: ReservationItem = mockReservationItem;
    
    this.afsService.addNewReservation(newReservationItem, this.currUser)
  }

  addMallData(newMallData: MallData): void{
    // MOCK_MALL_DATA
    const allMallsDataRef = this.afsService.getAllMallsDataRef();
    // const allMallsDataRef = this.afsService.getAllMallsDataRef;
    allMallsDataRef.add(newMallData)
  }

  addAllMallData(mallsData: MallData[]){
    mallsData.forEach((mallData) => this.addMallData(mallData))
  }
}
