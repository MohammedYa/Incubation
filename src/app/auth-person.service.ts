import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthPersonService {

  constructor(private _HttpClient:HttpClient) { }

  loginPerson(userData:any):Observable<any>{
    return this._HttpClient.post("http://sayedazp-001-site1.gtempurl.com/api/Account/login",userData)
  }
}
