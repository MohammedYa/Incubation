import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthPersonService {
  userData=new BehaviorSubject(null);
  userTybe:string=''
  userInfo=new BehaviorSubject<any>(null)
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem("UserToken")!=null){
      this.saveUserData(this.userTybe)

    }
   }

  saveUserData(usertybe:string){
    this.userTybe=usertybe
   let encodedToken= localStorage.getItem("UserToken")
   let DecodedToken:any=jwtDecode(JSON.stringify(encodedToken))
   this.userData.next(DecodedToken)
  }
  loginPerson(userData:any):Observable<any>{
    return this._HttpClient.post("http://sayedazp-001-site1.gtempurl.com/api/Account/login",userData).pipe(map((res)=>{
    this.userInfo.next(res)
    console.log(res)
    return res
    }))
  }
  LogOut(){
    
    localStorage.removeItem("UserToken")
    localStorage.removeItem("UserTybe")
    localStorage.removeItem("UserInfo")
    this.userData.next(null)
    this._Router.navigate(["/login"])
 
}
}
