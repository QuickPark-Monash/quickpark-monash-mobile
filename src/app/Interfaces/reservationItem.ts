import { ParkingSpace } from './ParkingSpace';

export interface ReservationItem {
  reservationId: number;
  locationName: string;
  carPlate: string;
  reservedParking: ParkingSpace;
  reservationTime: Date;
  reservationDuration: Date;
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





