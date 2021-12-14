import { User } from '../Interfaces/User';
import { ReservationItem } from 'src/app/Interfaces/reservationItem';

export interface ParkingSpace{
    parkingId: number, 
    reservationItem: ReservationItem,
    time: number,
    fee: number,
    isOccupied: boolean,
    bookedUser: User
}
