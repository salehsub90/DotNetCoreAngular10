import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // for async calls and api consuming

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiURL = 'http://localhost:5000/api';
  readonly PhotoUrl = 'http://localhost:5000/Photos';

  constructor(private http:HttpClient) { }

  //consume api calls from server
  getDepList():Observable<any[]> {
    return this.http.get<any>(this.ApiURL+'/department');
  }

  addDepartment(val:any) {
    return this.http.post(this.ApiURL+'/Department', val);
  }

  updateDepartment(val:any) {
    return this.http.put(this.ApiURL+'/Department', val);
  }

  deleteDepartment(val:any) {
    return this.http.delete(this.ApiURL+'/Department/'+val);
  }

  getEmpList():Observable<any[]> {
    return this.http.get<any>(this.ApiURL+'/Employee');
  }

  addEmployee(val:any) {
    return this.http.post(this.ApiURL+'/Employee', val);
  }

  updateEmployee(val:any) {
    return this.http.put(this.ApiURL+'/Employee', val);
  }

  deleteEmployee(val:any) {
    return this.http.delete(this.ApiURL+'/Employee/'+val);
  }

  UploadPhoto(val:any) {
    return this.http.post(this.ApiURL+'/Employee/SaveFile', val);
  }

  getAllDepartmentNames():Observable<any[]> {
    return this.http.get<any[]>(this.ApiURL+'/Employee/GetAllDepartmentNames');
  }
}
