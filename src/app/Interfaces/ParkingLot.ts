import { ParkingSpace } from './ParkingSpace';


export interface ParkingLot {
    capacity: number,
    parkingSpace: number,
    mallName: string,
    parkingLots: ParkingSpace[],
    weeklyPrices: number[]
  }
  