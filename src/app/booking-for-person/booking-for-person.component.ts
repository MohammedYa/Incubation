import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';

@Component({
  selector: 'app-booking-for-person',
  templateUrl: './booking-for-person.component.html',
  styleUrls: ['./booking-for-person.component.scss']
})
export class BookingForPersonComponent implements OnInit {
  Booking:any=[]
 
  getBooking(){
    this._GetIncubatorService.getUserBooking().subscribe((res)=>{
      this.Booking=res
    })
  }



  constructor(private _GetIncubatorService:GetIncubatorService) {
    this.getBooking()
  }

ngOnInit(): void {
  
}
}
