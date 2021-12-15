import { User } from '../Interfaces/User';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';

// interface IParkingSpace{
//     parkingId: number, 
//     reservationItem: ReservationItem,
//     time: number,
//     fee: number,
//     isOccupied: boolean,
//     bookedUser: User
// }


export class ParkingSpace{
    parkingId: string;
    time: number;
    fee: number;
    // bookedTimeSlot: Date;
    // bookedDuration: number;
    // bookedByUid: number | null;
    // occupiedByUid: number | null;
    isBooked: boolean;
    isOccupied: boolean;
    constructor( 
        parkingId: string, 
        // reservationItem: ReservationItem,
        time: number,
        fee: number,
        // bookedTimeSlot: Date,
        // bookedDuration: number,
        // bookedByUid: number | null,
        // occupiedByUid: number | null    
        isBooked: boolean,
        isOccupied: boolean,
    ){
        this.parkingId=parkingId, 
        this.time=time,
        this.fee= fee,
        // this.bookedTimeSlot= bookedTimeSlot,
        // this.bookedDuration= bookedDuration,
        // this.bookedByUid = bookedByUid,
        // this.occupiedByUid = occupiedByUid;
        this.isBooked=isBooked,
        this.isOccupied=isOccupied
    }

    // parkingId(){return this.parkingId}, 
    // reservationItem: ReservationItem,
    // time: number,
    // fee: number,
    // isOccupied: boolean,
    // bookedUser: User
}