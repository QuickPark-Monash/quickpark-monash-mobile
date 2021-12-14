import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { map } from 'rxjs/operators'
import { MOCKPROFILE } from 'src/app/MockData/mockprofiles';
import { AuthService } from 'src/app/services/auth.service';
import { AfsService } from 'src/app/services/afs.service';
import { Vehicle } from 'src/app/Interfaces/Vehicle';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  // DEFAULT MOCKUP STUFF

  allUsers!: User[];
  user!: User;
  userRef!: AngularFirestoreDocument<User>
  uid!: string;
  currUserVehicle!: Vehicle;

  constructor(private authService: AuthService, private afsService: AfsService) { 
    // this.user = MOCKPROFILE;
  }

  ngOnInit(): void {
    this.uid = this.authService.currentUserUID!;
    // this.retrieveAllUsers();
    this.userRef = this.afsService.getUserRefByUid(this.uid);
    const userObservable: Observable<any> = this.userRef.valueChanges()
    userObservable.subscribe((user: User) => {
      this.user = user;
      console.log(user.UID)
      console.log(user)
      console.log("pointsbalance:" + user.pointsBalance)
      console.log(user.displayName)
    });
  }

}
