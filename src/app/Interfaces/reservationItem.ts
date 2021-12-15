import { ParkingSpace } from './ParkingSpace';
import { User } from './User';

export interface ReservationItem {
  reservationId: string;
  // reservedBy: User;
  locationName: string;
  carPlate: string;
  // reservedParking: ParkingSpace;
  reservationStartTime: Date;
  reservationDuration: number;
  reservationCost?: number;
  pointsEarned?: number;
  isActive: boolean;
}

// export interface ReservationItem {
//   reservationId: number;
//   locationName: string;
//   parkingId: string;
//   carPlate: string;
//   reservationTime: number;
//   reservationDuration: number;
//   reservationCost?: number;
//   pointsEarned?: number;
//   isActive: boolean;
// }





