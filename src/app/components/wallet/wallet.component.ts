import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      title:"Wallet Info",
      icon: "warning",
      text:"This page shows you your parking spendings and allows you to top up when you pay for parking tickets through our application.",
      footer:"It is currently under construction"
    }).then(() => window.location.replace(""))
  }

}
