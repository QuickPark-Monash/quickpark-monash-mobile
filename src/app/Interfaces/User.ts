import { ReservationItem } from "./reservationItem";
import { UserRole } from "./UserRole";
import { Vehicle } from "./Vehicle";

export interface User {
  //Supposed to be String wrapper instead of strings due to HTTP Reponse return types
  UID: string,
  // role: UserRole,
  displayName?: string,
  profilePicture?: string,
  walletBalance?: number,
  pointsBalance?:number,
  // carplate: string,
  currentVehicle?: Vehicle,
  registeredVehicles?: Vehicle[],
  reservationHistory?: ReservationItem[]
}






