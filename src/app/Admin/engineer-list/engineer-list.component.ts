import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Engineer } from 'src/app/Classes/engineer';
import { EngineerServiceService } from 'src/app/Service/engineer-service.service';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent implements OnInit {

  constructor(private service:EngineerServiceService, private _router:Router){}
  engineerLists!:Engineer[];
  addedEngineer!:Engineer;
  flag:boolean=false;
  data ={
    empId:0,
    userName:'',
    password:'',
    pincode:'',
    isEdit:false
  }
  ngOnInit(){
      return this.service.getAllEngineer().subscribe(response =>{
        this.engineerLists = response;
        console.log("Engg List -> "+this.engineerLists[0].pincode);
      });
  }
  deleteCustomer(id:number){
    this.engineerLists = this.engineerLists.filter(c=>c.emp_id!=id);
    this.service.deleteEngineer(id).subscribe();
  }
  loadData(data:any){
    console.log("Hi From loaddata!");
    data.isEdit = true;
  }
  saveData(engg:Engineer){
    const result = {
      emp_id:this.data.empId != 0?this.data.empId:engg.emp_id,
      userName:this.data.userName != ''?this.data.userName:engg.userName,
      password:engg.password,
      pincode:this.data.pincode != ''?this.data.pincode:engg.pincode,
      isEdit:false
    }
    this.service.updateEngineer(engg.emp_id,result).subscribe();
    console.log("Updated -> ");
    this.ngOnInit();
  }
  cancelEdit(engg:Engineer){
    engg.isEdit = false;
    this._router.navigate(['../engineerList']);
  }

  onSubmit(){
    const result = {
      emp_id:this.data.empId,
      userName:this.data.userName,
      password:this.data.password,
      pincode:this.data.pincode,
      isEdit:false
    }
      this.service.saveEngineer(result).subscribe(res => 
       console.log("Added!" + res)
       );
    this.data.empId =0;
    this.data.userName = '';
    this.data.password = '';
    this.data.pincode = '';
    this.data.isEdit = false;
  }
  btnClick(){
      this.flag = true;
      console.log("flag = "+this.flag);
  }
  cancelAdding(){
    this.data.empId =0;
    this.data.userName = '';
    this.data.password = '';
    this.data.pincode = '';
    this.data.isEdit = false;
    this.flag = true;
  }
  pageReload(){
    this.flag = false;
    this._router.navigate(['../engineerList']);
  }
}
