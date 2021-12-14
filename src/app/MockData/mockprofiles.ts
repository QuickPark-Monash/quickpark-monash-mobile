import { Profile } from "../Interfaces/User";

export const MOCKPROFILE: Profile = {
  displayName: "Zach Khong",
  firstName: "Zach",
  lastName: "Khong",
  profilePicture: "assets/profile_pics/zach-khong.png",
  currentVehicle: {
    id: 1,
    vehicleName: "Mini Cooper Convertible",
    vehiclePlate: "WIN 1890",
    vehicleImage: "assets/profile_pics/zach-car.png",
  },
  registeredVehicles: [
    {
      id: 1,
      vehicleName: "Mini Cooper Convertible",
      vehiclePlate: "WIN 1890",
      vehicleImage: "assets/profile_pics/zach-car.png",
    }
  ],
  reservationHistory:[
    {
      reservationId: 1,
      locationName: "NU Sentral Brickfields",
      carPlate: "WIN 1980",
      reservationTime: new Date(2021, 11, 8, 10, 19, 45),
      reservationDuration: new Date(2021, 11, 8, 16, 19, 45),
      reservationCost: 10,
      pointsEarned: 120,
      isActive: false,
      parkingId: "B4-J40"
    },
    {
      reservationId: 2,
      locationName: "Suria KLCC",
      carPlate: "WIN 1980",
      reservationTime: new Date(2021, 11, 10, 10, 19, 45),
      reservationDuration: new Date(2021, 11, 10, 16, 19, 45),
      reservationCost: 5,
      pointsEarned: 120,
      isActive: false,
      parkingId: "A4-0"
    },
    {
      reservationId: 3,
      locationName: "Pavillion Kuala Lumpur",
      carPlate: "WIN 1980",
      reservationTime: new Date(2021, 11, 15, 14, 19, 45),
      reservationDuration: new Date(2021, 11, 15, 18, 19, 45),
      reservationCost: 10,
      pointsEarned: 120,
      isActive: false,
      parkingId: "ABH19"
    },
    {
      reservationId: 4,
      locationName: "Genting Highlands",
      carPlate: "WIN 1980",
      reservationTime: new Date(2021, 12, 9, 15, 19, 45),
      reservationDuration: new Date(2021, 12, 9, 16, 19, 45),
      reservationCost: 12,
      pointsEarned: undefined,
      isActive: true,
      parkingId: "KL-182-B"
    },
    {
      reservationId: 5,
      locationName: "KLIA Airport",
      carPlate: "WIN 1980",
      reservationTime: new Date(2022, 1, 2, 10, 19, 45),
      reservationDuration: new Date(2022, 1, 2, 16, 19, 45),
      reservationCost: 56,
      pointsEarned: undefined,
      isActive: true,
      parkingId: "J-10-KL"
    }
  ]
}
