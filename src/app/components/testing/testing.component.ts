import { Component, OnInit } from '@angular/core';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { User } from 'src/app/Interfaces/User';
import { AfsService } from '../../services/afs.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})

export class TestingComponent implements OnInit {
  reservations: ReservationItem[];
  users: User[];
  modelUserId:number;

  constructor(private afsService: AfsService) { 
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
    this.afsService.getAllUsersRef().valueChanges().subscribe((users: User[]) => {
      this.users = users;
    })
  }
}
