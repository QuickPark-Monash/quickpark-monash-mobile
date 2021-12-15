import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

  malls:string[] = ['Test1', 'test2']
  mallName!: string;
  constructor() { }

  ngOnInit(): void {
  }

  changeMall(e: any) {
    this.mallName = e.target.value
  }

}
