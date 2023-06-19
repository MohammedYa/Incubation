import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-book-incubator',
  templateUrl: './book-incubator.component.html',
  styleUrls: ['./book-incubator.component.scss']
})
export class BookIncubatorComponent  implements OnInit{


  BookForm:FormGroup=new FormGroup({
    // 'available':new FormControl(null,[Validators.required]),
    'Mather_Name':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    'Child_Name':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    'Date_of_birth':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    'Type_of_illness':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    'Phone_Number':new FormControl(null,[Validators.required,Validators.email]),
    'Doctor_Number':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    // 'image':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9]{8,}$/)])
    })
    
    supmitRegisterIncubation(BookForm:FormGroup){
      console.log(BookForm.value)
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
  