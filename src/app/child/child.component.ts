import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  children:any=[]
  personId:string=(JSON.parse(<string>localStorage.getItem("UserInfo"))).id
  userToken:string=localStorage.getItem("UserToken")!
  getChild(){
    this._GetIncubatorService.getUserChild(this.userToken).subscribe(
      (res)=>{
        this.children=res
      }
    )
  }
  constructor(private _GetIncubatorService:GetIncubatorService){
    this.getChild()
    localStorage.removeItem("url")
  }
  ngOnInit(): void {
    
  }
}
