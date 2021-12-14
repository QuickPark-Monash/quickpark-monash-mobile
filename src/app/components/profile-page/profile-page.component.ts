import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { MOCKPROFILE } from 'src/app/MockData/mockprofiles';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: User = MOCKPROFILE
  test!: string | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.test = this.authService.currentUserUID
  }

}
