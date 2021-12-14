import { ReservationItem } from "./reservationItem";
import { Vehicle } from "./Vehicle";

export interface User {
  //Supposed to be String wrapper instead of strings due to HTTP Reponse return types
  UID: string,
  displayName: string,
  profilePicture: string,
  walletBalance: number,
  currentVehicle: Vehicle,
  registeredVehicles: Vehicle[],
  reservationHistory: ReservationItem[]
}






