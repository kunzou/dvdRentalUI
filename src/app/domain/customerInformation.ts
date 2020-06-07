import { CustomerRental } from './customerRental';

export interface CustomerInformation {
    id: number
    address: string
    city: string
    country: string
    district: string
    firstName: string
    lastName: string
    phone: string    
    customerRentalList: CustomerRental[]
}