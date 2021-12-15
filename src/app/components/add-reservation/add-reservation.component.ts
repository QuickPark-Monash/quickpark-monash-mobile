import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import * as moment from 'moment';
import { AfsService } from 'src/app/services/afs.service';
import { AuthService } from 'src/app/services/auth.service';

// interfaces and mock data
import { MOCK_MALL_DATA } from 'src/app/MockData/mockMallData';
import { MallData } from './../../Interfaces/MallData';
import { User } from 'src/app/Interfaces/User';
import { ParkingSpace } from 'src/app/Interfaces/ParkingSpace';
import { ReservationItem } from './../../Interfaces/reservationItem';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {
  currUserData!: User;
  currUserReservations: ReservationItem[] = [];
  mallsData:MallData[] = [];
  // mallName!: string;

  selectedMallName!: string;
  selectedDate!: Date;
  selectedStartTime!: Date;
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

  // consoleLogDate(mDate: Date){
  //   console.log(typeof(mDate));
  //   const mDateObj: Date = new Date(mDate);
  //   console.log("selected date is: " + mDateObj.toString())
  //   console.log(mDateObj.getDay())
  //   console.log("day num: " + mDateObj.getDay())
  //   console.log("the selected day is: " + this.convDayStr(mDateObj.getDay()))
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

  addReservation(){
    // const oldHistory = this.currUserData.reservationHistory
    // this.currUserData.reservationHistory?.push()
    // const currUser = this.currUserData;

    try{
      const newReservation = this.generateNewReservation()
      this.afsService.addNewReservation(newReservation, this.currUserData);
    }
    catch(err){
      Swal.fire({
        title:"Incomplete forms",
        icon:"error",
        text:"Please fill in all the required fields before booking."
      })
    }
  }

  generateNewReservation(): ReservationItem{
    const user = this.currUserData;
    const selectedDateObj = new Date(this.selectedDate);
    const newReservation: ReservationItem = {
      reservationId: user.reservationHistory!.length.toString(),
      locationName: this.selectedMallName,
      carPlate: user.currentVehicle!.vehiclePlate,
      // reservedParking: new ParkingSpace(),
      reservationStartTime: this.dateTimeToDateObj(this.selectedDate, this.selectedStartTime),
      reservationDuration: this.floorToMinutes(this.duration),
      reservationCost: this.dynamicPrice,
      pointsEarned: 0,
      isActive: true
    };
    return newReservation;
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

  // floors duration in miliseconds to nearest minute
  floorToMinutes(duration: number): number{
    const totalMinutes = Math.floor((duration / (1000 * 60)));
    return totalMinutes * 1000 * 60
  }

  updateDailyPrice(selectedMallName: string, selectedDate: Date, selectedTime: Date){
    const selectedDateObj = new Date(selectedDate);
    const selectedMall = this.getMallByName(selectedMallName)
    console.log(typeof(selectedDateObj))
    const newDynamicPrice = selectedMall.parkingLot.weeklyPrices[selectedDateObj.getDay()]
    this.dynamicPrice = newDynamicPrice
    console.log(this.dynamicPrice)

    // Date and Time
    console.log(this.selectedDate)
    console.log(typeof(this.selectedDate))

    console.log(this.selectedStartTime)
    console.log(typeof(this.selectedStartTime))

    const newDate = this.dateTimeToDateObj(this.selectedDate, this.selectedStartTime);
    console.log(newDate)
    console.log(typeof(newDate))

    // duration of reservation (miliseconds)
    console.log(this.duration)
    console.log(this.floorToMinutes(this.duration)) // rounded to nearest minutes, in terms of miliseconds
  }

  dateTimeToDateObj(dateStr: Date, timeStr: Date): Date{
    const newDateStr = dateStr.toString() + "T" + timeStr.toString();
    const dateObj = new Date(newDateStr);
    return dateObj
  }

  // updateSe(desiredMallName: string){
  //   const desiredMall: MallData = this.mallsData.filter((mall) => mall.mallName == desiredMallName)[0];
  //   this.consoleLogSelectedMall(desiredMall)
  //   return desiredMall
  // }

}
