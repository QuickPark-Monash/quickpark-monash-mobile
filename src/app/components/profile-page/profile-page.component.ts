import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/Interfaces/Profile';
import { MOCKPROFILE } from 'src/app/MockProfiles/mockprofiles';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: Profile = MOCKPROFILE

  constructor() { }

  ngOnInit(): void {
  }

}
