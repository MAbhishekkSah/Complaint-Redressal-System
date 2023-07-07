import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaints } from 'src/app/Classes/complaints';
import { Engineer } from 'src/app/Classes/engineer';
import { EngineerAndComplaintsJoin } from 'src/app/Classes/engineer-and-complaints-join';
import { ComplaintServiceService } from 'src/app/Service/complaint-service.service';
import { EnggAndComplaintsJoinService } from 'src/app/Service/engg-and-complaints-join.service';
import { EngineerServiceService } from 'src/app/Service/engineer-service.service';

@Component({
  selector: 'app-create-work-item',
  templateUrl: './create-work-item.component.html',
  styleUrls: ['./create-work-item.component.css']
})
export class CreateWorkItemComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private complaintService:ComplaintServiceService,
    private enggService:EngineerServiceService, private ecService:EnggAndComplaintsJoinService, private _roter:Router){}
  
  complaint_Id!:number;
  complaint = new Complaints();
  enggList!:Engineer[];
  selectedPinCode:Complaints["pinCode"] = '';
  ecObj = new EngineerAndComplaintsJoin();
  ngOnInit() {
      this.complaint_Id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
      console.log("complaint id :- "+this.complaint_Id);
      this.complaintService.getComplaintById(this.complaint_Id).subscribe(data =>{
        this.complaint = data;
        this.selectedPinCode = this.complaint.pinCode;
        this.enggService.getEngineerByPin(this.selectedPinCode).subscribe(response => {
          this.enggList = response;
        });
      });
  }
  assignTask(id:any){
    this.ecObj.enggId = id;
    this.ecObj.complaintId = this.complaint_Id;
    this.ecService.saveEnggAndComplaints(this.ecObj).subscribe();
    this._roter.navigate(['../viewRegisteredComplaints']);
  }
}
