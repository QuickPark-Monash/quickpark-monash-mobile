import { MOCK_RESERVATION_HISTORY } from './mockReservationHistory';
import { ReservationItem } from './../Interfaces/reservationItem';
import { User } from "../Interfaces/User";
import { ParkingSpace } from './../Interfaces/ParkingSpace';


export const MOCKPROFILE: User = {
  UID: "Tester",
  displayName: "Zach Khong",
  profilePicture: "assets/profile_pics/zach-khong.png",
  walletBalance: 50,
  pointsBalance: 360,
  currentVehicle: {
    // id: 1,
    vehicleName: "Mini Cooper Convertible",
    vehiclePlate: "WIN 1890",
    vehicleImage: "assets/profile_pics/zach-car.png",
  },
  registeredVehicles: [
    {
      // id: 1,
      vehicleName: "Mini Cooper Convertible",
      vehiclePlate: "WIN 1890",
      vehicleImage: "assets/profile_pics/zach-car.png",
    }
  ],
  reservationHistory: MOCK_RESERVATION_HISTORY
}
