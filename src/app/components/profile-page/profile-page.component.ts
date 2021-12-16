import { ReservationItem } from './../../Interfaces/reservationItem';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import { AfsService } from 'src/app/services/afs.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

// interfaces and mockdata
import { User } from 'src/app/Interfaces/User';
import { Vehicle } from 'src/app/Interfaces/Vehicle';
import { MOCKPROFILE } from 'src/app/MockData/mockprofiles';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  // DEFAULT MOCKUP STUFF

  allUsers!: User[];
  user!: any;    // because the structure in firestore is different
  userRef!: AngularFirestoreDocument<any>
  // uid!: string;
  currUserVehicle!: Vehicle;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private afsService: AfsService,
    private spinner: NgxSpinnerService
    ) {
    // this.user = MOCKPROFILE;
  }

  ngOnInit(): void {
    this.spinner.show()
    // this.uid = this.authService.currentUserUID!;
    this.userRef = this.afsService.getUserRefByUid(this.authService.currentUserUID!);
    const userObservable: Observable<any> = this.userRef.valueChanges()
    userObservable.subscribe((user: any) => {
      this.setUser(user)
      // console.log("in profile page: console logging all timestamp objects converted to date")
      const history = this.user.reservationHistory!

      history.forEach((reserveItem: any) => {
        const timeStampObj: Timestamp = reserveItem.reservationStartTime
        const dateObj: Date = reserveItem.reservationStartTime.toDate()
        // console.log(timeStampObj)
        // console.log(typeof(timeStampObj))
        // console.log(dateObj)        
        // console.log(typeof(dateObj))
      });
    });
  }

  setUser(user: User){
    this.user = user
  }
}
