import { Component, OnInit } from '@angular/core';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { MOCKPROFILE } from 'src/app/MockData/mockprofiles';

import Swal from 'sweetalert2';
import * as moment from 'moment';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  userActive!: ReservationItem[]
  userHistory: ReservationItem[] = MOCKPROFILE.reservationHistory!
  selectedItem?: ReservationItem;

  durationHour?: number
  durationMinute?: number
  durationSecond?: number

  formattedTime?: string

  constructor(private alertService: AlertsService) { }

  ngOnInit(): void {

    this.userActive = this.filterHistory()

  }

  filterHistory(): ReservationItem[]{
    return this.userHistory.filter((item) => item.isActive)
  }

  onSelect(item: ReservationItem){
    this.selectedItem = item
    var duration = item.reservationDuration.valueOf() - item.reservationTime.valueOf()
    console.log(duration)
    this.getDuration(duration)
  }

  getDuration(duration: number){

    this.durationSecond = Math.floor((duration / 1000) % 60)
    this.durationMinute = Math.floor((duration / (1000 * 60)) % 60)
    this.durationHour = Math.floor((duration / (1000 * 60 * 60)) % 24);

    this.formattedTime = this.durationHour.toString().concat(` HR : ${this.durationMinute} MIN : ${this.durationSecond} SEC`)
  }

  addReservation(){
    this.alertService.notImplementedAlert()
  }

  trimDate(date: Date){
    return moment(date).format("ddd[\n]MMM Do YYYY[\n]h:mm:ss a")
  }

  changeDetails(){
    this.alertService.notImplementedAlert()
  }

  checkIn(){
    this.alertService.notImplementedAlert()
  }
}
