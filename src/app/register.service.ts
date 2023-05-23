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
    return this._HttpClient.post(`http://sayedazp-001-site1.gtempurl.com/api/Account/registerInc`,form)
  }
}
