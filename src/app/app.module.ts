import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { CodeComponent } from './code/code.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AvilableBedComponent } from './avilable-bed/avilable-bed.component';
import { RigesterIncubatorComponent } from './rigester-incubator/rigester-incubator.component'
import { RegisterPersonComponent } from './rigester-person/rigester-person.component';
import { RigesterDoctorsComponent } from './rigester-doctors/rigester-doctors.component';
import { RigesterBedsComponent } from './rigester-beds/rigester-beds.component';
import { BookIncubatorComponent } from './book-incubator/book-incubator.component';
import { HomePersonComponent } from './home-person/home-person.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { CorrectPasswordComponent } from './correct-password/correct-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { IncubatorDetailsComponent } from './incubator-details/incubator-details.component';
import { IncubatorsComponent } from './incubators/incubators.component';
import { BedDetailsComponent } from './bed-details/bed-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      AboutComponent,
      LoginComponent,
      RegisterHomeComponent,
      RegisterPersonComponent,
      CodeComponent,
      AvilableBedComponent,
      RigesterIncubatorComponent,
      RigesterDoctorsComponent,
      RigesterBedsComponent,
      BookIncubatorComponent,
      HomePersonComponent,
      EditPasswordComponent,
      CorrectPasswordComponent,
      ForgetPasswordComponent,
      IncubatorDetailsComponent,
      IncubatorsComponent,
      BedDetailsComponent,
      NotfoundComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
