import { Film } from './film';
import { CustomerInformation } from './customerInformation';

export interface FilmInformation {
    film: Film;
    customers: CustomerInformation
}