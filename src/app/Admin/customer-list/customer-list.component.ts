import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Classes/customer';
import { CustomerServiceService } from 'src/app/Service/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private service:CustomerServiceService){}
  customersList!:Customer[];
    ngOnInit() {
        this.service.getAllCustomer().subscribe(response =>
          this.customersList = response);
    }

    deleteCustomer(customerId:any){
      console.log("Id to be deleted:- "+customerId);
        this.customersList = this.customersList.filter(c=>c.id!=customerId);
        console.log("Before calling delete")
        this.service.deleteCustomer(customerId);
        console.log("Deleted succesfully!");
    }
}
