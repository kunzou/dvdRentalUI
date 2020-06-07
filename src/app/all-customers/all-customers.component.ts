import { Component, OnInit } from '@angular/core';
import { Customer } from '../domain/customer';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
  allCustomers: Customer[]

  page :number = 1
  pageSize :number = 30  

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.rentalService.getAllCustomers().subscribe(customers => {
      this.allCustomers = customers;
    });
  }  

}
