import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { ComplaintServiceService } from 'src/app/Service/complaint-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-register-complaints',
  templateUrl: './register-complaints.component.html',
  styleUrls: ['./register-complaints.component.css']
})
export class RegisterComplaintsComponent implements OnInit{

  constructor(private service:ComplaintServiceService, private _router:Router){}
  userForm!:FormGroup;
  user!:Customer;
  ngOnInit(): void {
    console.log("Hi from User Form:-");
    this.user = <Customer>UserSingletonClass.getInstance().loginMap.get('customerLogin');
      this.userForm = new FormGroup({
        category: new FormControl('Please Select a Category'),
        description:new FormControl(''),
        status:new FormControl('Open'),
        pinCode:new FormControl(''),
        user_id:new FormControl(this.user.id)
      })
      console.log("Category -> ");
      console.log("Category is = "+this.userForm.value.category);
  }
  onSubmit(){
      console.log("Inside submit btn 2 -> "+this.userForm.value.category);
      console.log("Inside submit btn 3 -> "+this.userForm.value.status);
      this.service.saveComplaint(this.userForm.value).subscribe();
      this.userForm.reset();
      //this.ngOnInit();
      this._router.navigate(['registerComplaints']);
      
  }
}
