import { Component, OnInit } from '@angular/core';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { AfsService } from '../../services/afs.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})

export class TestingComponent implements OnInit {
  reservations: ReservationItem[];

  constructor(private afsService: AfsService) { 
    this.reservations = [];
  }

  ngOnInit(): void {
    console.log('OnInit ran');
    this.afsService.getReservationItems().subscribe((reservationItems: ReservationItem[]) => {
      // console.log(items);
      this.reservations = reservationItems;
    })
  }
}
