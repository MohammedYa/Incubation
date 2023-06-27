import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookProgressService {

  constructor(private _HttpClient:HttpClient) { }

  bookIncubator(form: any): Observable<any> {
    // Add your token value here
    const token = JSON.stringify(localStorage.getItem("UserToken"));
    // Set the request headers with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this._HttpClient.post(
      'http://sayedazp-001-site1.gtempurl.com/api/Incubator/CreateBooking',
      form,
      { headers: headers }
    );
  }
  addBaby(form: any): Observable<any> {
    return this._HttpClient.post('http://sayedazp-001-site1.gtempurl.com/api/Incubator/AddChild',form );
  }
  
}
