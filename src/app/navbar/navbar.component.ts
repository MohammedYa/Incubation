import { Component, OnInit } from '@angular/core';
import { AuthPersonService } from '../servies/auth-person.service';
import { Router } from '@angular/router';
declare var $:any
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
  isUser=false
  isInc=false
  UserData:any;
  TypeOfUser:string=''
  constructor(private _AuthPersonService:AuthPersonService,private _Router:Router) {}
  
  LogOut(): void{
    
     this._AuthPersonService.LogOut();
     this.userEmail="";
     this.userCity="";
     this.userName="";
   
  }
  SetDataUser() {
    this.UserData = JSON.parse(localStorage.getItem('UserInfo') || '{}');
    this.userCity=this.UserData.city
    this.userEmail=this.UserData.email
    this.userName=this.UserData.displayName
 
       

  }
  canActiveteInc():boolean{
    this.TypeOfUser=<string>localStorage.getItem("UserTybe")
    if(this.TypeOfUser=="User"){
   return   this.isInc=false
    }
    else{
    return  this.isInc=true 

    }
  }
  canActiveteUser():boolean{
    this.TypeOfUser=<string>localStorage.getItem("UserTybe")
    if(this.TypeOfUser=="User"){
    return  this.isUser=true
    }
    else {
   return   this.isUser=false

    }
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
  

  //   $("#list").slideUp(0)
  // $('#list-icon').on('click', function(){
   
  //   $("#list").slideToggle(1000)
  //   })
  // $("#list-icon").on( "click", function() {
  //       $("#list"). slideToggle(1000);
  //     })
  
  //   $(window).ready(function() {
  //     $(window).resize(function() {
  //       let windowsize = $(window).width();
  //       if (windowsize >= 360 && windowsize < 992) {
  //             $("#list").slideDown();

  //       }
  //       else{
  //             $("#list").slideUp();

  //       }
  //     });});
    
    
}
}
