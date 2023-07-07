import { Component, OnInit } from '@angular/core';
import { Complaints } from 'src/app/Classes/complaints';
import { Engineer } from 'src/app/Classes/engineer';
import { EngineerAndComplaintsJoin } from 'src/app/Classes/engineer-and-complaints-join';
import { ComplaintServiceService } from 'src/app/Service/complaint-service.service';
import { EnggAndComplaintsJoinService } from 'src/app/Service/engg-and-complaints-join.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-view-work-item',
  templateUrl: './view-work-item.component.html',
  styleUrls: ['./view-work-item.component.css']
})
export class ViewWorkItemComponent implements OnInit {

  constructor(private ecService:EnggAndComplaintsJoinService, private complaintService:ComplaintServiceService){}
  engg = new Engineer();
  complaintsList!:Complaints[];
  enggId!:number;
  ngOnInit() {
      this.engg = <Engineer>UserSingletonClass.getInstance().loginMap.get("engineerLogin");
      this.enggId = this.engg.emp_id;
      this.ecService.getAllEnggAndComplaintsByEnggId(this.enggId).subscribe(response => {
        this.complaintsList = response;
      });
  }
  closeComplaint(cId:any, index:any)
  {
    const data = {
      complaintId: cId,
      category:this.complaintsList[index].category,
      description:this.complaintsList[index].description,
      status:'Closed',
      pinCode:this.complaintsList[index].pinCode,
      date:this.complaintsList[index].date,
      user_id:this.complaintsList[index].user_id
    }
    this.complaintService.updateComplaint(cId,data).subscribe();
  }
}
