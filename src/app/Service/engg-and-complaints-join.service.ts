import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EngineerAndComplaintsJoin } from '../Classes/engineer-and-complaints-join';
import { Complaints } from '../Classes/complaints';

@Injectable({
  providedIn: 'root'
})
export class EnggAndComplaintsJoinService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8082/enggAndComplaintsJoin";
  getAllEnggAndComplaintsByEnggId(id:number):Observable<Complaints[]>
  {
    let endPoint = 'getComplaintsByEnggId';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get<Complaints[]>(`${url}`);
  }
  saveEnggAndComplaints(ec:EngineerAndComplaintsJoin):Observable<EngineerAndComplaintsJoin>
  {
    let endPoint = 'addEnggAndComplaints';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<EngineerAndComplaintsJoin>(`${url}`,ec);
  }
}
