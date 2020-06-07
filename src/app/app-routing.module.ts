import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AvailableFilmsComponent } from './available-films/available-films.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', redirectTo: '/allCustomers', pathMatch: 'full' },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'allCustomers', component: AllCustomersComponent },
  { path: 'availableFilms', component: AvailableFilmsComponent },
  { path: 'film/:id', component: FilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
