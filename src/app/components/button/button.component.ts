import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color!:string;
  @Input() text!: string;
  @Input() logoPresent!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showLogo(): boolean{
    return this.logoPresent === "true"
  }
}
