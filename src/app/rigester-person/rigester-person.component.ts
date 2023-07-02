import { Component ,OnInit} from '@angular/core';
import { FormGroup,Validators ,FormControl} from '@angular/forms';
import { RegisterService } from '../servies/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rigester-person',
  templateUrl: './rigester-person.component.html',
  styleUrls: ['./rigester-person.component.scss']
})
export class RegisterPersonComponent implements OnInit {
 errors:string=''
 options: string[] = ["Cairo","Alexandria","Aswan","Asyut","Beheira","Beni Suef","Dakahlia","Damietta","Faiyum","Gharbia","Giza"
 ,"Ismailia","Kafr El Sheikh","Luxor","Matruh","Minya","Monufia","New Valley","North Sinai","Port Said","Qalyubia",
 "Qena","Red Sea","Sharqia","Sohag","South Sinai","Suez"];
  RegisterPersonForm:FormGroup=new FormGroup({
    'displayName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'phoneNumber':new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
    'city':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    "gevernorate":new FormControl("Cairo")

  })
  
  supmitRegisterPerson(form:FormGroup){
    console.log(form.value)

    this._RegisterService.registerPerson(form.value).subscribe(
      
    (res)=>{
   
      this._Router.navigate(['/addCild',res.id])
      console.log(res)
    }
    ,
    (error)=>{
     this.errors ="Email is oready register"
    },
    
    
    
    )
  }




  
constructor(private _RegisterService:RegisterService ,private _Router:Router){}
ngOnInit(): void {
  
}




}
  
