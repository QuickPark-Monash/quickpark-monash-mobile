import { ParkingSpace } from './ParkingSpace';


export interface ParkingLot {
    capacity: number,
    // parkingSpace: number,
    // mallName: string,
    parkingSpaces: ParkingSpace[],
    weeklyPrices: number[]
  }
  