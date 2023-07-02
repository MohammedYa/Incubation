import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetIncubatorService {

  constructor(private httpClient: HttpClient) { }

  getIncubatorByCity(city:string): Observable<any> {
    return this.httpClient.get(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/GetIncubatorByCity?city=${city}`);
  }
  getIncubator(yourAccessToken:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + yourAccessToken
    });

    return this.httpClient.get('http://sayedazp-001-site1.gtempurl.com/api/Incubator', { headers });
  }
  getIncurBed(yourAccessToken:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + yourAccessToken
    });

    return this.httpClient.get('http://sayedazp-001-site1.gtempurl.com/api/Incubator/beds', { headers });
  }
  getIncubatorDetails(Id:number): Observable<any> {
    return this.httpClient.get(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/GetIncubator/${Id}`);
  }
  getIncubatorDoctors(yourAccessToken:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + yourAccessToken
    });
    return this.httpClient.get(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/doctors`,{headers:headers});
  }
  getIncubatorBooking(): Observable<any> {
    const token = localStorage.getItem("UserToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url ="http://sayedazp-001-site1.gtempurl.com/api/Incubator/GetBooking";
    return this.httpClient.get(url, { headers });
  }
  getUserBooking(yourAccessToken:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + yourAccessToken
    });
    return this.httpClient.get(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/GetBooking`,{headers:headers});
  }
  getUserChild(yourAccessToken:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + yourAccessToken
    });
    return this.httpClient.get(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/GetChildData`,{headers:headers});
  }
}
