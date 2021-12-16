import { Component, OnInit } from '@angular/core';
import { ParkingSpace } from 'src/app/Interfaces/ParkingSpace';
import { User } from 'src/app/Interfaces/User';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { textChangeRangeIsUnchanged } from 'typescript';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];
  scanResult: string = '';
  title: string ="QR Code Scanner";
  scanned?: boolean;
  validScan: boolean = false;
  scanSuccessed: boolean = false;
  tryAgain: boolean = false;
  scanAttempts: number = 0;
  isPopUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.scanned = false;
    Swal.fire({
      icon: "info",
      title: "QR Scanner",
      text: "Scan the parking QR Code to check-in your parking space",
      footer:"The QR Code is located on the bottom left of your parking space"
    }).then(()=>{
      this.isPopUp = true
      console.log(this.isPopUp)
    })
    this.isPopUp = false
    console.log(this.isPopUp)
  }

  onCodeResult(result: string){
    this.scanned = true;
    this.scanResult = result
    this.scanSuccessed = true
    this.scanAttempts += 1
    this.isValidScan(result)
    // console.log(this.validScan)
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

    if (this.isValidScan(result)){
      Swal.fire({
        icon: "success",
        title: "Check in successful!",
        text: "Enjoy your visit :)",
        footer:"Time is starting to tick"
      }).then(() => {
        this.scanSuccessed = false
        window.history.go(-1)
      });
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Check in failure",
        text: "Invalid check-in OR Invalid QR code :(",
        footer:"Try Again"
      }).then(()=> {
        this.tryAgain = true;
        this.validScan = false;
        this.scanSuccessed = false
      });
    }
  }

  // checks whether the scanned car park is valid (MEDIUM MALL PACKAGE: scan twice system)
  // assume that the resultStr is in json string format
  isValidScan(resultStr: string): boolean{
    if (resultStr.length === 0){
      return false
    }
    const parkSpace = this.parseParkingSpace(resultStr);
    // this.validScan = this.isParkable(parkSpace);
    // return this.isParkable(parkSpace)
    return this.isParkable(parkSpace)
  }

  isParkable(parkSpace: ParkingSpace){
    const parkable = !parkSpace.isOccupied
    return parkable
  }

  parseParkingSpace(jsonStr: string){
    // console.log("trying to parse: " + jsonStr)
    const parkSpace: ParkingSpace = JSON.parse(jsonStr);
    // console.log(parkSpace.parkingId, parkSpace.isBooked, parkSpace.isOccupied);
    return parkSpace
  }

  // swalTriggered(){
  //   return 
  // }

  // upon successful scan, sets
  flipActiveBooking(){
  }

  // flip boolean values
  flip(boo: boolean){
    return !boo
  }
}
