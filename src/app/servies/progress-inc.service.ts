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
deleteBook(id:number):Observable<any>{
  const token = JSON.stringify(localStorage.getItem("UserToken"));
 return this._HttpClient.delete(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/DeleteBooking?id=${id}`,{body:token})
}
updateBed(id:string,obj:any):Observable<any>{
return this._HttpClient.put(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/UpdateBed?id=${id}`,obj)
}
updateDoc(id:string,obj:any):Observable<any>{
  return this._HttpClient.put(`http://sayedazp-001-site1.gtempurl.com/api/Incubator/UpdateDoctor?id=${id}`,obj)
}
updateInc(id: number, obj: any): Observable<any> {
  const token = localStorage.getItem("UserToken"); // Replace 'your_token' with the actual token value
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url = `http://sayedazp-001-site1.gtempurl.com/api/Incubator/UpdateIncubator?id=${id}`;

  return this._HttpClient.put(url, obj, { headers });
}
updateUser(id: number, obj: any): Observable<any> {
  const token = localStorage.getItem("UserToken"); // Replace 'your_token' with the actual token value
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url = `http://sayedazp-001-site1.gtempurl.com/api/Incubator/UpdateUserDate?id=${id}`;

  return this._HttpClient.put(url, obj, { headers });
}


}
