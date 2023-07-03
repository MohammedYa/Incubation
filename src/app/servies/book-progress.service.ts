import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookProgressService {

  constructor(private _HttpClient:HttpClient) { }

  
  
  bookIncubator(childId:number,obj: any ): Observable<any> {
  const token = localStorage.getItem("UserToken"); // Replace 'your_token' with the actual token value
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url =`http://sayedazp-001-site1.gtempurl.com/api/Incubator/CreateBooking?id=${childId}`;

  return this._HttpClient.post(url, obj, { headers });
}
  addBaby(form: any): Observable<any> {
    return this._HttpClient.post('http://sayedazp-001-site1.gtempurl.com/api/Incubator/AddChild',form );
  }
  getBedOfInc(id:number):Observable<any>{
    return this._HttpClient.get(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/Getbeds/${id}`)
  }
  
}
