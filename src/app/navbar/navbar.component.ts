import { Component, OnInit } from '@angular/core';
import { AuthPersonService } from '../auth-person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  userEmail:string="";
  userName:string="";
  userCity:string="";
  isLoggedIn:boolean=false;
  UserData:any;
  constructor(private _AuthPersonService:AuthPersonService,private _Router:Router) {}
  
  LogOut(): void{
    
     this._AuthPersonService.LogOut();
     this.userEmail="";
     this.userCity="";
     this.userName="";
   
  }
  SetDataUser() {
    this.UserData = JSON.parse(localStorage.getItem('User') || '{}');
    this.userCity=this.UserData.city
    this.userEmail=this.UserData.email
    this.userName=this.UserData.displayName
 
       

  }
   ngOnInit(): void {
   this.SetDataUser() 
    this._AuthPersonService.userData.subscribe(
      ()=>{
        if(this._AuthPersonService.userData.getValue()!=null){
          this.isLoggedIn = true
        }
        else{
          this.isLoggedIn = false
        }
      }
    )
  // this._AuthPersonService.userData.subscribe(

  //   ()=>{
  //     console.log(this._AuthPersonService.UserInfo.getValue())
  //   }
  // )
  }
}
