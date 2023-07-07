import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaints } from 'src/app/Classes/complaints';
import { ComplaintServiceService } from 'src/app/Service/complaint-service.service';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute, private service:ComplaintServiceService){}
  userId!:any;
  complaintsList!:Complaints[];
  ngOnInit() {
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
      return this.service.getComplaintByUserId(this.userId).subscribe(response =>
          this.complaintsList = response
      );
  }
}
