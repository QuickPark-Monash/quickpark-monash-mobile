import { Vehicle } from "./Vehicle";

export interface Profile {
  //Supposed to be String wrapper instead of strings due to HTTP Reponse return types
  displayName: string,
  firstName: string,
  lastName: string,
  profilePicture: string,
  currentVehicle: Vehicle,
  registeredVehicles: Vehicle[],
}
