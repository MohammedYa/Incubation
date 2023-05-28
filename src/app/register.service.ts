import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  constructor(private _HttpClient:HttpClient) { }
  
  registerPerson(form:any):Observable<any>{
    return this._HttpClient.post(`http://sayedazp-001-site1.gtempurl.com/api/Account/registerUser`,form)
  }
  registerIncubator(form:any):Observable<any>{
    return this._HttpClient.post(`http://sayedazp-001-site1.gtempurl.com/api/Account/registerIncubator`,form)
  }
  registerDoctor(form:any):Observable<any>{
    return this._HttpClient.post(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/AddDoctor`,form)
  }
  registerBed(form:any):Observable<any>{
    return this._HttpClient.post(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/AddBed`,form)
  }
}
