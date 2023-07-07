import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Engineer } from '../Classes/engineer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineerServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8082/engineer";

  getAllEngineer():Observable<Engineer[]>
  {
    let endPoint = 'getAllEngineers';
    let url = `${this.baseUrl}/${endPoint}`;
    console.log("url -> "+`${url}`);
    return this.http.get<Engineer[]>(`${url}`);
  }
  getEngineerById(id:number): Observable<Engineer>{
    let endPoint = 'getEngineerById';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get<Engineer>(`${url}`);
  }
  getEngineerByPin(pincode:string) : Observable<Engineer[]>{
    let endPoint = 'engineerByPin';
    let url = `${this.baseUrl}/${endPoint}/${pincode}`;
    return this.http.get<Engineer[]>(`${url}`);
  }
  saveEngineer(engineer:Engineer):Observable<Engineer>{
    let endPoint = 'addEngineer';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<Engineer>(`${url}`,engineer);
  }
  updateEngineer(id:number,engineer:Engineer): Observable<Engineer>{
    let endPoint = 'update';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    console.log("Values = "+id + " data = "+engineer);
    return this.http.put<Engineer>(`${url}`,engineer);
  }
  deleteEngineer(id:number){
    let endPoint = 'delete';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.delete(`${url}`);
  }
}
