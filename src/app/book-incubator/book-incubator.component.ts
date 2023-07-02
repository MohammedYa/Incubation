import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { BookProgressService } from '../servies/book-progress.service';
declare var $:any;
import { Router ,ActivatedRoute} from '@angular/router';
import {  Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-book-incubator',
  templateUrl: './book-incubator.component.html',
  styleUrls: ['./book-incubator.component.scss']
})
export class BookIncubatorComponent  implements OnInit{
Id:number=this._ActivatedRoute.snapshot.params['id']
id:string=`${this.Id}`
imgsrc:string="assets/imgs/home/uploade 1.svg"
url:string=''
userInfo:string=<string>localStorage.getItem("UserToken")!

// BaseUrl:string=

  BookForm:FormGroup=new FormGroup({
    'motherName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'childName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'age':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    'typeofIllness':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    'phoneNumber':new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
    'phoneNumberofDoctor':new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
    "userDateId":new FormControl(this.id),
    "prescriptionUrl":new FormControl(<string>localStorage.getItem("url"),[Validators.required])
})
    
supmitRegisterIncubation(BookForm:FormGroup){
     

      this._BookProgressService.addBaby(BookForm.value).subscribe(
        (res)=>{

          if(res.isSuccess){
            if(this.userInfo!="null")
            this._Router.navigate(['/child'])
          }
          else{
            this._Router.navigate(['/login'])

          }
        }
      )
}
  
  constructor(private _BookProgressService:BookProgressService,private _ActivatedRoute:ActivatedRoute,private _Router:Router){}
 
  onchange(e:any) {
    if(e.target.files){
       const file =e.target.files[0]
       this.convertToBase64(file)
    }
  }
  convertToBase64(file:File){
    const obsarvable=new Observable((subscriber:Subscriber<any>)=>{
      this.readFile(file,subscriber)
    })

    obsarvable.subscribe((d)=>{
      localStorage.setItem("url",d)
      this.url=d
    })
  } 
   readFile(file:File,subscriber:Subscriber<any>){
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload=()=>{
      subscriber.next(fileReader.result)
      subscriber.complete()
    },
    fileReader.onerror=(error)=>{
      subscriber.error(error)
      subscriber.complete()

    }
   }

   
   ngOnInit(): void {

    // $("#info").slideUp(0)
    // $('#drop').on('click', function(){
    //   $('#down').toggleClass('fa-chevron-up')
    //   $('#down').toggleClass('fa-chevron-down')
    //   $("#info").slideToggle(1000)
    //  })

  
  }
} 
  

  