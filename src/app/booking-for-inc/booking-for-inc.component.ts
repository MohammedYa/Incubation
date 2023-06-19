import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../get-incubator.service';

@Component({
  selector: 'app-booking-for-inc',
  templateUrl: './booking-for-inc.component.html',
  styleUrls: ['./booking-for-inc.component.scss']
})
export class BookingForIncComponent implements OnInit {
Booking:any=[]
IncToken:string=localStorage.getItem("UserToken")!

getBooking(){
  this._GetIncubatorService.getIncubatorBooking(this.IncToken).subscribe((res)=>{
    this.Booking=res
    console.log(res)})
}

constructor(private _GetIncubatorService:GetIncubatorService) {}
  ngOnInit(): void {
    this.getBooking()
  }
}
