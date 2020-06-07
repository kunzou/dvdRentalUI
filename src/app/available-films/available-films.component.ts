import { Component, OnInit } from '@angular/core';
import { AvailableFilm } from '../domain/availableFilm';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-available-films',
  templateUrl: './available-films.component.html',
  styleUrls: ['./available-films.component.css']
})
export class AvailableFilmsComponent implements OnInit {
  availableFilms: AvailableFilm[]

  page :number = 1
  pageSize :number = 30  

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.getAvailableFilms();
  }

  getAvailableFilms(): void {
    this.rentalService.getAvailableFilms().subscribe(films => {
      this.availableFilms = films;
    });
  }  
}
