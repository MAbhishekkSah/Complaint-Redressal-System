import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Classes/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:8082/customer";

  getAllCustomer():Observable<Customer[]>
  {
    let endPoint = 'getAll';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.get<Customer[]>(`${url}`);
  }
  getCustomerById(id:number): Observable<Customer>{
    let endPoint = 'getById';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get<Customer>(`${url}`);
  }
  saveCustomer(customer:Customer):Observable<Customer>{
    let endPoint = 'addCustomer';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<Customer>(`${url}`,customer);
  }
  updateCustomer(id:number,customer:Customer): Observable<Customer>{
    let endPoint = 'update';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.put<Customer>(`${url}`,customer);
  }
  deleteCustomer(id:number){
    let endPoint = 'delete';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    console.log("url -> "+`${url}`);
    this.http.delete(`${url}`).subscribe(data =>
      {
        return this.getAllCustomer();
      });
  }
}
