import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CodeComponent } from './code/code.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { CorrectPasswordComponent } from './correct-password/correct-password.component';
import { RegisterPersonComponent } from './rigester-person/rigester-person.component';
import { RigesterIncubatorComponent } from './rigester-incubator/rigester-incubator.component';
import { RigesterDoctorsComponent } from './rigester-doctors/rigester-doctors.component';
import { RigesterBedsComponent } from './rigester-beds/rigester-beds.component';
import { IncubatorsComponent } from './incubators/incubators.component';
import { HomePersonComponent } from './home-person/home-person.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AvilableBedComponent } from './avilable-bed/avilable-bed.component';
import { BookIncubatorComponent } from './book-incubator/book-incubator.component';
import { IncubatorDetailsComponent } from './incubator-details/incubator-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/about',pathMatch:'full' },
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterHomeComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'code',component:CodeComponent},
  {path:'editPassword',component:EditPasswordComponent},
  {path:'recorrectPassword',component:CorrectPasswordComponent},
  {path:'personRegister',component:RegisterPersonComponent},
  {path:'incubationRegister',component:RigesterIncubatorComponent},
  {path:'doctorRegister/:id',component:RigesterDoctorsComponent},
  {path:'bedRegister/:id',component:RigesterBedsComponent},
  {path:'Incubators',canActivate:[AuthGuard],component:HomePersonComponent},
  {path:'IncubatorHome',canActivate:[AuthGuard],component:IncubatorsComponent},
  {path:'personHome',canActivate:[AuthGuard],component:HomePersonComponent},
  {path:'incubation-page/:id',canActivate:[AuthGuard],component:IncubatorDetailsComponent},
  {path:'book',canActivate:[AuthGuard],component:BookIncubatorComponent},
  {path:'available-bed',canActivate:[AuthGuard],component:AvilableBedComponent},

  {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
