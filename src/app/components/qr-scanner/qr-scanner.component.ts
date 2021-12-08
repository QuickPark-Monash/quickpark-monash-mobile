import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  scanResult: any = '';


  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(result: string){
    this.scanResult = result
  }

}
