import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';
@Component({
  selector: 'app-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.scss']
})
export class HomePersonComponent  implements OnInit{
Incubators:any[]=[];
city:string=(JSON.parse(<string>localStorage.getItem("UserInfo"))).city
name:string=''
  userToken:string=localStorage.getItem("UserToken")!
  getIncubators(){

    this._GetIncubatorService.getIncubator(this.userToken).subscribe((res)=>{
     this.Incubators=res
    

    })

  }
  NearIncubation(){
    this._GetIncubatorService.getIncubatorByCity(this.city).subscribe(
      (res)=>{
        this.Incubators=res
        console.log(res)
      }
    )
  }
  constructor(private _GetIncubatorService:GetIncubatorService) {
    this.NearIncubation()
  }
  ngOnInit(): void {
    
  }
}
