import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MOCK_MALL_DATA } from 'src/app/MockData/mockMallData';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

  malls:string[] = []
  mallName!: string;

  selectedDate!: Date;
  selectedTime!: Date;
  today = moment().toDate();

  duration: number = 0;

  durationHour: number = Math.floor((this.duration / 1000) % 60)
  durationMinute: number = Math.floor((this.duration / (1000 * 60)) % 60)
  durationSecond: number = Math.floor((this.duration / (1000 * 60 * 60)) % 24);

  formattedTime?: string = this.durationHour.toString().concat(` HR : ${this.durationMinute} MIN`)

  constructor() { }

  ngOnInit(): void {
    MOCK_MALL_DATA.forEach((value) => {
      this.malls.push(value.mallName)
    })
  }

  valueChanged(e: any) {
    this.getDuration(e.target.value);
  }

  getDuration(duration: number){

    this.durationMinute = Math.floor((duration / (1000 * 60)) % 60)
    this.durationHour = Math.floor((duration / (1000 * 60 * 60)) % 24);

    this.formattedTime = this.durationHour.toString().concat(` HR : ${this.durationMinute} MIN`)
  }
}
