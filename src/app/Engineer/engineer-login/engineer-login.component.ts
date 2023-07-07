import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Engineer } from 'src/app/Classes/engineer';
import { EngineerServiceService } from 'src/app/Service/engineer-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-engineer-login',
  templateUrl: './engineer-login.component.html',
  styleUrls: ['./engineer-login.component.css']
})
export class EngineerLoginComponent implements OnInit {

  constructor(private service:EngineerServiceService, private _router:Router){}
  engineerList!:Engineer[];
  data ={
    name:'',
    password: ''
  }
  flag:boolean = false;
  ngOnInit() {
    this.service.getAllEngineer().subscribe(response =>
      this.engineerList = response);
  }

  login(){
    if(!this.data.name || !this.data.password)
    {
      alert("Please Enter Username or Password!");
      return;
    }
    let ctr = 0;
    console.log("Hi Login123!" +this.engineerList[ctr].userName);
    while(this.engineerList[ctr]!=null)
    {
      console.log("Hi Login while!");
      if(this.engineerList[ctr].userName == this.data.name && this.engineerList[ctr].password==this.data.password)
      {
          this.flag = true;
          console.log("Hi Login If!");
          UserSingletonClass.getInstance().loginMap.set('engineerLogin',this.engineerList[ctr]);
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
