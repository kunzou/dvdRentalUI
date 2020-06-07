import { Payment } from './payment';

export interface Rental {
    filmId: number;
    filmTitle: string ;
    payments: Payment[];
    rentalDate: Date ;
    rentalId: number;
    returnDate: Date;
    staffId: number;    
}