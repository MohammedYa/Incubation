import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetIncubatorService {

  constructor(private httpClient: HttpClient) { }

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
}
