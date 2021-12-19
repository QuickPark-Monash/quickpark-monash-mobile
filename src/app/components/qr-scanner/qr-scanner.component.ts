import { Component, OnInit } from '@angular/core';
import { ParkingSpace } from 'src/app/Interfaces/ParkingSpace';
import { User } from 'src/app/Interfaces/User';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { textChangeRangeIsUnchanged } from 'typescript';
import { BarcodeFormat } from '@zxing/library';
import { MOCK_MALL_DATA } from 'src/app/MockData/mockMallData';
import { ValidationError } from 'src/app/custom-errors.ts/ValidationError';


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
    console.log(result)
    if (this.isValidScan(result)){

      Swal.fire({
        icon: "success",
        title: "Check in successful!",
        text: "Enjoy your visit :)",
        footer:"Time is starting to tick"
      }).then(() => {
        this.scanned = true;
        window.history.go(-1)
      });
    }
    else{
      this.scanned = true
      Swal.fire({
        icon: "error",
        title: "Check-in failure",
        text: "You are at the wrong parking spot",
        footer:"Please try again at the designated parking space"
      }).then(()=> {
        this.scanned = false;
      });
    }
  }

  // checks whether the scanned car park is valid (MEDIUM MALL PACKAGE: scan twice system)
  // assume that the resultStr is in json string format
  isValidScan(resultStr: string): boolean{
    let parkSpace: any;

    if (resultStr.length === 0){  // zero length json string
      return false
    }
    else{
      try {
        parkSpace = this.parseParkingSpace(resultStr);
      } 
      catch (err) {
        if (err instanceof ValidationError) {
          console.log("Invalid data: " + err.message); // Invalid data: No field: name
          return false
        } 
        else if (err instanceof SyntaxError) { 
          console.log("JSON Syntax Error: " + err.message);
          return false
        } 
        else {
          throw err; // unknown error, rethrow it (**)
        }
      }
    }
    
    return this.isParkable(parkSpace)
  }

  isParkable(parkSpace: ParkingSpace){
    const parkable = !parkSpace.isOccupied
    return parkable
  }

  parseParkingSpace(jsonStr: string){
    // const parkSpace: ParkingSpace
    const parkSpace: any = JSON.parse(jsonStr);

    if (!parkSpace.parkingId) {
      throw new ValidationError("No field: parkingId");
    }
    if (!parkSpace.time) {
      throw new ValidationError("No field: time");
    }
    if (!parkSpace.fee) {
      throw new ValidationError("No field: fee");
    }    
    if (!parkSpace.isBooked) {
      throw new ValidationError("No field: isBooked");
    }
    if (!parkSpace.isOccupied) {
      throw new ValidationError("No field: isOccupied");
    }
    return parkSpace
  }

  // read parking space JSON objects


  // flip boolean values
  flip(boo: boolean){
    return !boo
  }

}
