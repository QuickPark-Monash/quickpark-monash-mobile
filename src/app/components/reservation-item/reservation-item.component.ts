import { Component, OnInit } from '@angular/core';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { AfsServiceService } from './../../services/afs-service.service';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.scss']
})
export class ReservationItemComponent implements OnInit {
  reservations: ReservationItem[];
    
  constructor(private afsService: AfsServiceService) {
    this.reservations = [];
  }

  ngOnInit(): void {
    this.afsService.getReservationItems().subscribe((reservations: ReservationItem[]) => {
      // console.log(items);
      this.reservations = reservations;
    })
  }

}
