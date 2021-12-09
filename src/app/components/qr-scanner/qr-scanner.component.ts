import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  scanResult: any = '';
  title: string ="QR Code Scanner"

  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(result: string){
    Swal.fire({
      icon: "success",
      title: "Check in successful!",
      text: "Enjoy your visit :)",
      footer:"Time is starting to tick"
    })
    this.scanResult = result
  }

}
