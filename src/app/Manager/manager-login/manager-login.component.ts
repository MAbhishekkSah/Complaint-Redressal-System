import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/Classes/manager';
import { ManagerServiceService } from 'src/app/Service/manager-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit{

  constructor(private service:ManagerServiceService, private _router:Router){}
  managerList!:Manager[];
  data ={
    name:'',
    password: ''
  }
  flag:boolean = false;
  ngOnInit() {
    this.service.getAllManager().subscribe(response =>
      this.managerList = response);
  }

  login(){
    if(!this.data.name || !this.data.password)
    {
      alert("Please Enter Username or Password!");
      return;
    }
    let ctr = 0;
    console.log("Hi Login123!" +this.managerList[ctr].userName);
    while(this.managerList[ctr]!=null)
    {
      console.log("Hi Login while!");
      if(this.managerList[ctr].userName == this.data.name && this.managerList[ctr].password==this.data.password)
      {
          this.flag = true;
          console.log("Hi Login If!");
          UserSingletonClass.getInstance().loginMap.set('managerLogin',this.managerList[ctr]);
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
