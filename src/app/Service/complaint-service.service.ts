import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaints } from '../Classes/complaints';
@Injectable({
  providedIn: 'root'
})
export class ComplaintServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8082/complaint";

  getAllComplaints():Observable<Complaints[]>
  {
    let endPoint = 'getAll';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.get<Complaints[]>(`${url}`);
  }
  getComplaintById(id:number): Observable<Complaints>{
    let endPoint = 'getById';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get<Complaints>(`${url}`);
  }
  getComplaintByUserId(userId:number):Observable<Complaints[]>{
    let endPoint = 'getByUserId';
    let url = `${this.baseUrl}/${endPoint}/${userId}`;
    return this.http.get<Complaints[]>(`${url}`);
  }
  saveComplaint(complaint:Complaints):Observable<Complaints>{
    let endPoint = 'addComplaint';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<Complaints>(`${url}`,complaint);
  }
  updateComplaint(id:number,complaint:Complaints): Observable<Complaints>{
    let endPoint = 'update';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.put<Complaints>(`${url}`,complaint);
  }
  deleteComplaints(id:number){
    let endPoint = 'delete';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.delete(`${url}`);
  }
}
