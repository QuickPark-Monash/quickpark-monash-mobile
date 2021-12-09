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
  scanned?: boolean;

  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      icon: "info",
      title: "QR Scanner",
      text: "Scan the parking QR Code to check-in your parking space",
      footer:"The QR Code is located on the bottom left of your parking space"
    })
  }

  onCodeResult(result: string){
    this.scanned = true;
    Swal.fire({
      icon: "success",
      title: "Check in successful!",
      text: "Enjoy your visit :)",
      footer:"Time is starting to tick"
    }).then(() => window.history.go(-1))
    this.scanResult = result
  }

}
