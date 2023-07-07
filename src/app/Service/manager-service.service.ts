import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../Classes/manager';
import { Complaints } from '../Classes/complaints';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8082/manager";

  getAllManager():Observable<Manager[]>
  {
    let endPoint = 'getAll';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.get<Manager[]>(`${url}`);
  }
  getManagerById(id:number): Observable<Manager>{
    let endPoint = 'getManagerById';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get<Manager>(`${url}`);
  }

  getComplaintsById(id:number): Observable<Complaints[]>{
    let endPoint = 'getComplaints';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get<Complaints[]>(`${url}`);
  }
  saveManager(manager:Manager):Observable<Manager>{
    let endPoint = 'addManager';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<Manager>(`${url}`,manager);
  }
  updateManager(id:number,manager:Manager): Observable<Manager>{
    let endPoint = 'update';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.put<Manager>(`${url}`,manager);
  }
  deleteManager(id:number){
    let endPoint = 'delete';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.delete(`${url}`);
  }
}
