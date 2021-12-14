import { ReservationItem } from "./reservationItem";
import { Vehicle } from "./Vehicle";

export interface User {
  //Supposed to be String wrapper instead of strings due to HTTP Reponse return types
  uid: string,
  displayName: string,
  firstName: string,
  lastName: string,
  profilePicture: string,
  walletBalance: number,
  currentVehicle: Vehicle,
  registeredVehicles: Vehicle[],
  reservationHistory: ReservationItem[]
}






