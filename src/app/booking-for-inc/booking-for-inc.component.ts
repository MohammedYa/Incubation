import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';
declare let $:any
@Component({
  selector: 'app-booking-for-inc',
  templateUrl: './booking-for-inc.component.html',
  styleUrls: ['./booking-for-inc.component.scss']
})
export class BookingForIncComponent implements OnInit {
Booking:any=[]
Reqest:object={}
IncToken:string=localStorage.getItem("UserToken")!
reqId:any=''
childName:any=''
age:any=''
motherName:any=''
phone:any=''
DrPhone:any=''
tybeOfIllness:any=''
date:any=''
getBooking(){
  this._GetIncubatorService.getIncubatorBooking(this.IncToken).subscribe((res)=>{
    this.Booking=res
    console.log(res)})
}
reqest(id:string){
  this.reqId=id
for(let i=0;i<this.Booking.length;i++){
 if(id==this.Booking[i].id){
  this.childName=this.Booking[i].childName
  console.log(this.Booking[i].childName)

  this.age=this.Booking[i].age
  console.log(this.Booking[i].age)

  this.motherName=this.Booking[i].motherName
  console.log(this.Booking[i].motherName)

  this.phone=this.Booking[i].phoneNumber
  console.log(this.Booking[i].phoneNumber)

  this.DrPhone=this.Booking[i].phoneNumberofDoctor
  console.log(this.Booking[i].phoneNumberofDoctor)

  this.tybeOfIllness=this.Booking[i].typeofIllness
  console.log(this.Booking[i].typeofIllness)

  this.date=this.Booking[i].dateofBooking
  console.log(this.Booking[i].dateofBooking)


 }
 
}
 this.getdata()
}
getdata(){
 console.log(this.reqId)
  console.log(this.DrPhone)
  console.log(this.age)
  console.log(this.phone)
  console.log(this.motherName)
  console.log(this.tybeOfIllness)
  console.log(this.DrPhone)
  console.log(this.date)

}


constructor(private _GetIncubatorService:GetIncubatorService) {}
  ngOnInit(): void {
    this.getBooking()
    $('#close').click(function(){
      $('#layer').hide()
    })
    
   
  }
}
