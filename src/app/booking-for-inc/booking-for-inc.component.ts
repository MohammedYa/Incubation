import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';
import { ProgressIncService } from '../servies/progress-inc.service';

@Component({
  selector: 'app-booking-for-inc',
  templateUrl: './booking-for-inc.component.html',
  styleUrls: ['./booking-for-inc.component.scss']
})
export class BookingForIncComponent implements OnInit {
Booking:any=[]
getBooking(){
  this._GetIncubatorService.getIncubatorBooking().subscribe((res)=>{
    this.Booking=res
  }
  )
}
deleteBooking(id:number){
this._ProgressIncService.deleteBook(id).subscribe(
  (res)=>{
    if(res.isSuccess){
      this.getBooking()
    }
  }
)
}


constructor(private _GetIncubatorService:GetIncubatorService,private _ProgressIncService:ProgressIncService) {}
  ngOnInit(): void {
    this.getBooking()
    
   
  }
}
