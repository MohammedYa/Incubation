import { Component ,OnInit} from '@angular/core';
import { FormGroup,Validators ,FormControl} from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-rigester-person',
  templateUrl: './rigester-person.component.html',
  styleUrls: ['./rigester-person.component.scss']
})
export class RegisterPersonComponent implements OnInit {

  RegisterPersonForm:FormGroup=new FormGroup({
    'displayName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'phoneNumber':new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
    'city':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9]{8,}$/)])
  })
  
  supmitRegisterPerson(form:FormGroup){

    this._RegisterService.registerPerson(form.value).subscribe((res)=>{
    console.log(res)

    })
  }




  
constructor(private _RegisterService:RegisterService){}
ngOnInit(): void {
  
}




}
  
