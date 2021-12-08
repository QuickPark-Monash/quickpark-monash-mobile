import { Profile } from "../Interfaces/Profile";

export const MOCKPROFILE: Profile = {
  displayName: "Zach Khong",
  firstName: "Zach",
  lastName: "Khong",
  profilePicture: "assets/profile_pics/zach-khong.png",
  currentVehicle: {
    id: 1,
    vehicleName: "Mini Cooper Convertible",
    vehiclePlate: "WIN 1890",
    vehicleImage: "assets/Images/zach-car.png",
  },
  registeredVehicles: [
    {
      id: 1,
      vehicleName: "Mini Cooper Convertible",
      vehiclePlate: "WIN 1890",
      vehicleImage: "assets/Images/zach-car.png",
    }
  ],
}
