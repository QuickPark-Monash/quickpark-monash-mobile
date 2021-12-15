import { Component, OnInit } from '@angular/core';
import { ParkingSpace } from 'src/app/Interfaces/ParkingSpace';
import { User } from 'src/app/Interfaces/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  scanResult: any = '';
  title: string ="QR Code Scanner";
  scanned?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.scanned = false;
    Swal.fire({
      icon: "info",
      title: "QR Scanner",
      text: "Scan the parking QR Code to check-in your parking space",
      footer:"The QR Code is located on the bottom left of your parking space"
    })
  }

  onCodeResult(result: string){
    this.scanned = true;
    // const validFireOptionsObj = {
    //   title: "Check in successful!",
    //   icon: "success",
    //   text: "Enjoy your visit :)",
    //   footer:"Time is starting to tick"
    // };
    // const invalidFireOptionsObj = {
    //   icon: "error",
    //   title: "Check in failure",
    //   text: "Invalid check in :("
    // };
    // const optionsObj = this.isValidScan(result)? validFireOptionsObj : invalidFireOptionsObj;
    // Swal.fire({
    //   title: "Check in successful!",
    //   icon: "success",
    //   text: "Enjoy your visit :)",
    //   footer:"Time is starting to tick"
    // }).then(() => window.history.go(-1));

    if (this.isValidScan(result)){
      Swal.fire({
        icon: "success",
        title: "Check in successful!",
        text: "Enjoy your visit :)",
        footer:"Time is starting to tick"
      }).then(() => window.history.go(-1))
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Check in failure",
        text: "Invalid check in :("
      }).then(() => window.history.go(-1))
    }
    this.scanResult = result
  }

  // checks whether the scanned car park is valid (MEDIUM MALL PACKAGE: scan twice system)
  // assume that the resultStr is in json string format
  isValidScan(resultStr: string): boolean{
    const parkSpace = this.parseParkingSpace(resultStr);
    return this.isParkable(parkSpace)
  }

  isParkable(parkSpace: ParkingSpace){
    const parkable = !parkSpace.isOccupied
    return parkable
  }

  parseParkingSpace(jsonStr: string){
    const parkSpace: ParkingSpace = JSON.parse(jsonStr);
    console.log(parkSpace.parkingId, parkSpace.isBooked, parkSpace.isOccupied);
    return parkSpace
  }

  // upon successful scan, sets
  flipActiveBooking(){
  }
}
