import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      icon: "info",
      title: "Vehicles Management",
      text: "This page allows users to register and manage their vehicles with our application.",
      footer: "This page is under construction"
    }).then(() => window.history.go(-1))
  }

}
