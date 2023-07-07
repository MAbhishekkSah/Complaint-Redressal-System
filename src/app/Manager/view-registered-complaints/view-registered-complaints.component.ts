import { Component, OnInit } from '@angular/core';
import { Complaints } from 'src/app/Classes/complaints';
import { Manager } from 'src/app/Classes/manager';
import { ComplaintServiceService } from 'src/app/Service/complaint-service.service';
import { ManagerServiceService } from 'src/app/Service/manager-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-view-registered-complaints',
  templateUrl: './view-registered-complaints.component.html',
  styleUrls: ['./view-registered-complaints.component.css']
})
export class ViewRegisteredComplaintsComponent implements OnInit{

  constructor(private service:ManagerServiceService, private complaintService:ComplaintServiceService){}
  complaintsList!:Complaints[];
  manager!:Manager;
  ngOnInit() {
      this.manager = <Manager>UserSingletonClass.getInstance().loginMap.get('managerLogin');
      this.service.getComplaintsById(this.manager.emp_Id).subscribe(response =>
        this.complaintsList = response);
  }
  closeComplaint(id:any, index:any){
    const data = {
      complaintId: id,
      category:this.complaintsList[index].category,
      description:this.complaintsList[index].description,
      status:'Closed',
      pinCode:this.complaintsList[index].pinCode,
      date:this.complaintsList[index].date,
      user_id:this.complaintsList[index].user_id
    }
    this.complaintService.updateComplaint(id,data).subscribe();
    this.service.getComplaintsById(this.manager.emp_Id).subscribe(resp =>
      this.complaintsList = resp);
  }
}
