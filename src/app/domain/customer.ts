import { Rental } from './rental';

export interface Customer {
    id: number;
    address: string;
    city: string;
    country: string;
    district: string;
    firstName: string;
    lastName: string;
    phone: string;
    rentals: Rental[];
}