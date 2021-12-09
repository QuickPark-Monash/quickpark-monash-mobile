import { Component, OnInit } from '@angular/core';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';
import { MOCKPROFILE } from 'src/app/MockProfiles/mockprofiles';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  userActive!: ReservationItem[]
  userHistory: ReservationItem[] = MOCKPROFILE.reservationHistory
  selectedItem?: ReservationItem;

  durationHour?: number
  durationMinute?: number
  durationSecond?: number

  formattedTime?: string

  constructor() { }

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

    this.formattedTime = this.durationHour.toString().concat(`HR ${this.durationMinute} MINS : ${this.durationSecond} S`)
  }

  addReservation(){
    Swal.fire("Not Implemented")
  }
}
