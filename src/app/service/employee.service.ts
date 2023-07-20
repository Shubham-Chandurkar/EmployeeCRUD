import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getEmployees(){
  return this.http.get<Employee[]>(this.baseURl);
  }

  postEmployee(employee:Employee){
  return this.http.post<Employee>(this.baseURl,employee);
  }

  deleteEmployee(id:string){
    return this.http.delete(this.baseURl+'/'+id);
  }

}
