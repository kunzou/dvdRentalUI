import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from './domain/customer';
import { AvailableFilm } from './domain/availableFilm';
import { CustomerInformation } from './domain/customerInformation';
import { FilmInformation } from './domain/filmInformation';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private API_URL = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomers(): Observable<Customer[]> {
    const url = `${this.API_URL}/customers`;
    return this.http.get<Customer[]>(url);
  }

  getAvailableFilms(): Observable<AvailableFilm[]> {
    const url = `${this.API_URL}/availableFilms`;
    return this.http.get<AvailableFilm[]>(url);
  }
  
  getCustomer(id: number): Observable<CustomerInformation> {
    const url = `${this.API_URL}/customer/${id}`;
    return this.http.get<CustomerInformation>(url);
  }

  getFilm(id: number): Observable<FilmInformation> {
    const url = `${this.API_URL}/film/${id}`;
    return this.http.get<FilmInformation>(url);
  }  
}
