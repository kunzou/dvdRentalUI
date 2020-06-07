import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerInformation } from '../domain/customerInformation';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerInformation: CustomerInformation;
  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.rentalService.getCustomer(+id).subscribe(customer => {
        this.customerInformation = customer;
      });
  }  
}
