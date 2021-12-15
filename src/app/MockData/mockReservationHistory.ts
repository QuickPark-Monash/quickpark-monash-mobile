import { ParkingSpace } from "../Interfaces/ParkingSpace"

export const MOCK_RESERVATION_HISTORY = [
    {
      reservationId: 10,
      locationName: "NU Sentral Brickfields",
      carPlate: "WIN 1980",
      reservedParking: new ParkingSpace("B4-J40",100,10,true,false,),
      reservationTime: new Date(2021, 11, 8, 10, 19, 45),
      reservationDuration: new Date(2021, 11, 8, 16, 19, 45),
      reservationCost: 10,
      pointsEarned: 120,
      isActive: false,
    },
    {
      reservationId: 2,
      locationName: "Suria KLCC",
      carPlate: "WIN 1980",
      reservedParking: new ParkingSpace("A4-0",100,10,true,false,),
      reservationTime: new Date(2021, 11, 10, 10, 19, 45),
      reservationDuration: new Date(2021, 11, 10, 16, 19, 45),
      reservationCost: 5,
      pointsEarned: 120,
      isActive: false,
      // parkingId: "A4-0"
    },
    {
      reservationId: 3,
      locationName: "Pavillion Kuala Lumpur",
      carPlate: "WIN 1980",
      reservedParking: new ParkingSpace("ABH19",100,10,true,false,),
      reservationTime: new Date(2021, 11, 15, 14, 19, 45),
      reservationDuration: new Date(2021, 11, 15, 18, 19, 45),
      reservationCost: 10,
      pointsEarned: 120,
      isActive: false,
    },
    {
      reservationId: 4,
      locationName: "Genting Highlands",
      carPlate: "WIN 1980",
      reservedParking: new ParkingSpace("KL-182-B",100,10,true,false,),
      reservationTime: new Date(2021, 12, 9, 15, 19, 45),
      reservationDuration: new Date(2021, 12, 9, 16, 19, 45),
      reservationCost: 12,
      pointsEarned: undefined,
      isActive: true,
      // parkingId: "KL-182-B"
    },
    {
      reservationId: 5,
      locationName: "KLIA Airport",
      carPlate: "WIN 1980",
      reservedParking: new ParkingSpace("J-10-KL",100,10,true,false,),
      reservationTime: new Date(2022, 1, 2, 10, 19, 45),
      reservationDuration: new Date(2022, 1, 2, 16, 19, 45),
      reservationCost: 56,
      pointsEarned: undefined,
      isActive: true,
      // parkingId: "J-10-KL"
    }
]