import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressIncService {


  constructor(private _HttpClient:HttpClient) { }




deleteBed(id: string ): Observable<any> {
  const token = JSON.stringify(localStorage.getItem("UserToken"));
  return this._HttpClient.delete(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/DeleteBed?id=${id}`, {body:token});
}
deleteDoctor(id: string ): Observable<any> {
  const token = JSON.stringify(localStorage.getItem("UserToken"));
  return this._HttpClient.delete(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/DeleteDoctor?id=${id}`, {body:token});
}


}
