import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _router:Router){}
  data ={
    name:'',
    password: ''
  }
  flag:boolean = false;
  ngOnInit() {
  }

  login(){
    if(!this.data.name || !this.data.password)
    {
      alert("Please Enter Username or Password!");
      return;
    }
      if("Admin"==this.data.name && "admin"==this.data.password)
      {
          this.flag = true;
          console.log("Hi Login If!");
          UserSingletonClass.getInstance().loginMap.set('adminLogin','Admin');
          alert("Welcome "+this.data.name+"!");
          this._router.navigate(['../home']);
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
