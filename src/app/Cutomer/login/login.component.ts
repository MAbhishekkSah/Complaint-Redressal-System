import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { CustomerServiceService } from 'src/app/Service/customer-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private service:CustomerServiceService, private _router:Router){}
  customersList!:Customer[];
  data ={
    name:'',
    password: ''
  }
  flag:boolean = false;
  ngOnInit() {
    this.service.getAllCustomer().subscribe(response =>
      this.customersList = response);
  }

  login(){
    if(!this.data.name || !this.data.password)
    {
      alert("Please Enter Username or Password!");
      return;
    }
    let ctr = 0;
    console.log("Hi Login123!" +this.customersList[ctr].userName);
    while(this.customersList[ctr]!=null)
    {
      console.log("Hi Login while!");
      if(this.customersList[ctr].userName == this.data.name && this.customersList[ctr].password==this.data.password)
      {
          this.flag = true;
          console.log("Hi Login If!");
          UserSingletonClass.getInstance().loginMap.set('customerLogin',this.customersList[ctr]);
          alert("Welcome "+this.data.name+"!");
          this._router.navigate(['../home']);
      }
      ctr++;
    }
    if(this.flag==false)
    {
      alert("You have Entered Wrong Username or Password. Please enter correct details!");
      this.data.name = '';
      this.data.password = '';
      return;
    }
    
  }
}
