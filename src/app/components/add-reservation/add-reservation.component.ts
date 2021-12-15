import { MallData } from './../../Interfaces/MallData';
import { ReservationItem } from './../../Interfaces/reservationItem';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import * as moment from 'moment';
import { User } from 'src/app/Interfaces/User';
import { MOCK_MALL_DATA } from 'src/app/MockData/mockMallData';
import { AfsService } from 'src/app/services/afs.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {
  currUserData!: User;
  mallsData:MallData[] = []
  // mallName!: string;

  selectedMallName!: string;
  selectedDate!: Date;
  selectedTime!: Date;
  today = moment().toDate();

  duration: number = 0;
  durationHour: number = Math.floor((this.duration / 1000) % 60)
  durationMinute: number = Math.floor((this.duration / (1000 * 60)) % 60)
  durationSecond: number = Math.floor((this.duration / (1000 * 60 * 60)) % 24);
  formattedTime?: string = this.durationHour.toString().concat(` HR : ${this.durationMinute} MIN`)

  dynamicPrice: number = 0

  constructor(private afsService: AfsService, private authService: AuthService) { }

  ngOnInit(): void {
    // Loading data from firestore
    const currUserRef: AngularFirestoreDocument<User> = this.afsService.getUserRefByUid(this.authService.currentUserUID!);
    currUserRef.valueChanges().subscribe((user)=> this.currUserData = user!)
    this.afsService.getAllMallsDataRef().valueChanges().subscribe((mallsData)=> this.mallsData = mallsData!)
    console.log(this.mallsData)
  }

  valueChanged(e: any) {
    this.getDuration(e.target.value);
  }

  getDuration(duration: number){
    this.durationMinute = Math.floor((duration / (1000 * 60)) % 60)
    this.durationHour = Math.floor((duration / (1000 * 60 * 60)) % 24);
    this.formattedTime = this.durationHour.toString().concat(` HR : ${this.durationMinute} MIN`)
  }

  // from mallsData.weeklyPrices 
  // dayNumber: Monday=0, Tuesday=1 ... Sunday=6
  getDailyFare(mallData: MallData, dayNumber: number){
    return mallData.parkingLot.weeklyPrices[dayNumber]
  }
  
  consoleLogDate(mDate: Date){
    console.log(typeof(mDate));
    const mDateObj: Date = new Date(mDate);
    console.log("selected date is: " + mDateObj.toString())
    console.log(mDateObj.getDay())
    console.log("day num: " + mDateObj.getDay())
    console.log("the selected day is: " + this.convDayStr(mDateObj.getDay()))
  }

  // consoleLogSelectedMallName(mall: string){
  //   console.log(typeof(mall));
  //   console.log(mall);
  // }


  convDayStr(dayNum: number): string{
    var dayStr: string;
    switch(dayNum) {
      case 0:
        dayStr = "Sunday";
        break;
      case 1:
        dayStr = "Monday";
        break;
      case 2:
        dayStr = "Tuesday";
        break;
      case 3:
        dayStr = "Wednesday";
        break;
      case 4:
        dayStr = "Thursday";
        break;
      case 5:
        dayStr = "Friday";
        break;
      case 6:
        dayStr = "Saturday";
        break;
      default:
        dayStr = "invalid day"
    }
    return dayStr
  }

  addReservation(newReservation: ReservationItem, currUser: User){
    // const oldHistory = this.currUserData.reservationHistory
    // this.currUserData.reservationHistory?.push()
    this.afsService.addNewReservation(newReservation, currUser)
  }

  getMallByName(desiredMallName: string){
    const desiredMall: MallData = this.mallsData.filter((mall) => mall.mallName == desiredMallName)[0];
    console.log(desiredMall)
    return desiredMall
  }

  // getMallDailyPrice(selectedMallName: string, selectedDate: Date){
  //   // need to somehow convert a string object back to date object
  //   const selectedDateObj = new Date(selectedDate);
  //   console.log(typeof(selectedDateObj))
  //   return this.getMallByName(selectedMallName).parkingLot.weeklyPrices[selectedDateObj.getDay()]
  //   // getMallByName(selectedMallName).parkingLot.weeklyPrices[selectedDate.getDay()]
  // }

  updateDailyPrice(selectedMallName: string, selectedDate: Date, selectedTime: Date){
    const selectedDateObj = new Date(selectedDate);
    const selectedMall = this.getMallByName(selectedMallName)
    console.log(typeof(selectedDateObj))
    const newDynamicPrice = selectedMall.parkingLot.weeklyPrices[selectedDateObj.getDay()]
    console.log(newDynamicPrice)
    this.dynamicPrice = newDynamicPrice
  }



  // updateSe(desiredMallName: string){
  //   const desiredMall: MallData = this.mallsData.filter((mall) => mall.mallName == desiredMallName)[0];
  //   this.consoleLogSelectedMall(desiredMall)
  //   return desiredMall
  // }

}
