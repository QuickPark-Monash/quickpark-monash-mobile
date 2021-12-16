import { Component, OnInit } from '@angular/core';
import { ParkingSpace } from 'src/app/Interfaces/ParkingSpace';
import { User } from 'src/app/Interfaces/User';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  scanResult: any = '';
  title: string ="QR Code Scanner";
  scanned?: boolean;
  validScan: boolean = false;

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
    this.isValidScan(result)
    // const validFireOptionsObj = {
    //   icon: 'success',
    //   title: "Check in successful!",
    //   text: "Enjoy your visit :)",
    //   footer:"Time is starting to tick"
    // };
    // const invalidFireOptionsObj = {
    //   icon: 'error' ,
    //   title: "Check in failure",
    //   text: "Invalid check in :(",
    //   footer: ""
    // };
    // const optionsObj: SweetAlertOptions<any,any> = this.isValidScan(result) ? validFireOptionsObj : invalidFireOptionsObj;
    
    // Swal.fire(optionsObj).then(() => window.history.go(-1));

    // Swal.fire({
    //   title: "Check in successful!",
    //   icon: "success",
    //   text: "Enjoy your visit :)",
    //   footer:"Time is starting to tick"
    // }).then(() => window.history.go(-1));

    if (this.validScan){
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
        text: "Invalid check in :(",
        footer:"Time is starting to tick"
      }).then(() => window.history.go(-1))
    }
    this.scanResult = result
  }

  // checks whether the scanned car park is valid (MEDIUM MALL PACKAGE: scan twice system)
  // assume that the resultStr is in json string format
  isValidScan(resultStr: string): void{
    const parkSpace = this.parseParkingSpace(resultStr);
    this.validScan = this.isParkable(parkSpace);
    // return this.isParkable(parkSpace)
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
