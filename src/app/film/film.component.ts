import { Component, OnInit } from '@angular/core';
import { FilmInformation } from '../domain/filmInformation';
import { RentalService } from '../rental.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  filmInformation: FilmInformation;
  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getFilm();
  }

  getFilm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.rentalService.getFilm(+id).subscribe(film => {
        this.filmInformation = film;
      });
  }  

}
