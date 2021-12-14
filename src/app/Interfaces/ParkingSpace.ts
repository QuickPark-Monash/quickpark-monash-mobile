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
    // reservationItem: ReservationItem;
    time: number;
    fee: number;
    isBooked: boolean;
    isOccupied: boolean;
    // bookedUser: User;
    constructor( 
        parkingId: string, 
        // reservationItem: ReservationItem,
        time: number,
        fee: number,
        isBooked: boolean,
        isOccupied: boolean,
        // bookedUser: User
    ){
        this.parkingId=parkingId, 
        // this.reservationItem= reservationItem,
        this.time=time,
        this.fee= fee,
        this.isBooked=isBooked,
        this.isOccupied=isOccupied
        // this.bookedUser=bookedUser
    }

    // parkingId(){return this.parkingId}, 
    // reservationItem: ReservationItem,
    // time: number,
    // fee: number,
    // isOccupied: boolean,
    // bookedUser: User
}