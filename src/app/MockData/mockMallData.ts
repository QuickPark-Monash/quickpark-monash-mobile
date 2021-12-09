import { MallData } from "../Interfaces/MallData";
import { ParkingFees } from "../Interfaces/ParkingFees";

// mock yp weekly prices
// const priceArr1: Array<ParkingFees> = [
//     {day: "Monday", price: 10}, 
//     {day: "Tuesday", price: 11}, 
//     {day: "Wednesday", price: 12}, 
//     {day: "Thursday", price: 13}, 
//     {day: "Friday", price: 14},
//     {day: "Saturday", price: 15}, 
//     {day: "Sunday", price: 16}
// ]

// const priceArr2:  Array<ParkingFees> = [
//     {day: "Monday", price: 16}, 
//     {day: "Tuesday", price: 15}, 
//     {day: "Wednesday", price: 14}, 
//     {day: "Thursday", price: 13}, 
//     {day: "Friday", price: 12},
//     {day: "Saturday", price: 11}, 
//     {day: "Sunday", price: 10}
// ]
// const priceArr3:  Array<ParkingFees> = [
//     {day: "Monday", price: 20}, 
//     {day: "Tuesday", price: 30}, 
//     {day: "Wednesday", price: 40}, 
//     {day: "Thursday", price: 50}, 
//     {day: "Friday", price: 40},
//     {day: "Saturday", price: 30}, 
//     {day: "Sunday", price: 20}
// ]

const priceArr1: Array<number> = [10,11,12,13,14,15,16];
const priceArr2: Array<number> = [16,15,14,13,12,11,10];
const priceArr3: Array<number> = [10,20,30,40,30,20,10];

export const MOCK_MALL_DATA: Array<MallData> = [
    {
        mallId: 0,
        mallName: "Mid Valley",
        weeklyPrices: priceArr1
    },
    {
        mallId: 1,
        mallName: "One Utama",
        weeklyPrices: priceArr2
    },
    {
        mallId: 2,
        mallName: "Sunway Velocity",
        weeklyPrices: priceArr3
    }
]