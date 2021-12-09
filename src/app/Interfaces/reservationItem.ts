export interface ReservationItem {
  reservationId: number;
  locationName: string;
  parkingId: string;
  carPlate: string;
  reservationTime: Date;
  reservationDuration: Date;
  reservationCost?: number;
  pointsEarned?: number;
  isActive: boolean;
}
