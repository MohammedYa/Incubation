import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../get-incubator.service';
@Component({
  selector: 'app-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.scss']
})
export class HomePersonComponent  implements OnInit{
Incubators:any[]=[];

  userToken:string=localStorage.getItem("UserToken")!
  getIncubators(){

    this._GetIncubatorService.getIncubator(this.userToken).subscribe((res)=>{
     this.Incubators=res
    

    })

  }
  constructor(private _GetIncubatorService:GetIncubatorService) {
    this.getIncubators()
    }
  ngOnInit(): void {
    
  }
}
