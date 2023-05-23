import { Component ,OnInit} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {


  codeForm:FormGroup=new FormGroup({
    'num1':new FormControl(null,[Validators.required,Validators.min(0),Validators.max(9),Validators.pattern(/[0-9]/)]),
    'num2':new FormControl(null,[Validators.required,Validators.min(0),Validators.max(9),Validators.pattern(/[0-9]/)]),
    'num3':new FormControl(null,[Validators.required,Validators.min(0),Validators.max(9),Validators.pattern(/[0-9]/)]),
    'num4':new FormControl(null,[Validators.required,Validators.min(0),Validators.max(9),Validators.pattern(/[0-9]/)])
  })

SupmitCodeForm(){
  console.log(this.codeForm)
}
  constructor(){}
  ngOnInit(): void {
    
  }
}
