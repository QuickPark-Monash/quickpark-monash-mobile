import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { MOCKPROFILE } from 'src/app/MockData/mockprofiles';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: User = MOCKPROFILE

  constructor() { }

  ngOnInit(): void {

  }

}
