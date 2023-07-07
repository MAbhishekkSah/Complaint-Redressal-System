import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/Classes/manager';
import { ManagerServiceService } from 'src/app/Service/manager-service.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent {

  constructor(private service:ManagerServiceService, private _router:Router){}
  managersList!:Manager[];
  flag:boolean=false;
  data ={
    empId:0,
    userName:'',
    password:'',
    pinCodesList:[],
    isEdit:false
  }
  ngOnInit(){
      return this.service.getAllManager().subscribe((response) =>{
        this.managersList = response;
        console.log("Engg List -> "+this.managersList[0].pinCodesList);
      });
  }
  deleteCustomer(id:number){
    this.managersList = this.managersList.filter(c=>c.emp_Id!=id);
    this.service.deleteManager(id).subscribe();
  }
  loadData(data:any){
    console.log("Hi From loaddata!");
    data.isEdit = true;
  }
  saveData(manager:Manager){
    const result = {
      emp_Id:this.data.empId != 0?this.data.empId:manager.emp_Id,
      userName:this.data.userName != ''?this.data.userName:manager.userName,
      password:manager.password,
      pinCodesList:this.data.pinCodesList != null?this.data.pinCodesList:manager.pinCodesList,
      isEdit:false
    }
    this.service.updateManager(manager.emp_Id,result).subscribe();
    console.log("Updated -> ");
    this.ngOnInit();
  }
  cancelEdit(manager:Manager){
    manager.isEdit = false;
    this._router.navigate(['../managerList']);
  }

  onSubmit(){
    const result = {
      emp_Id:this.data.empId,
      userName:this.data.userName,
      password:this.data.password,
      pinCodesList:this.data.pinCodesList,
      isEdit:false
    }
      this.service.saveManager(result).subscribe(res => 
       console.log("Added!" + res)
       );
    this.data.empId =0;
    this.data.userName = '';
    this.data.password = '';
    this.data.pinCodesList = [];
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
    this.data.pinCodesList = [];
    this.data.isEdit = false;
    this.flag = true;
  }
  pageReload(){
    this.flag = false;
    this._router.navigate(['../managerList']);
  }
}
