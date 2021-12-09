import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {

  }

}
