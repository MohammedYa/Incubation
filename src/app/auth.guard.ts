import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthPersonService } from './auth-person.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private _AuthPersonService:AuthPersonService,private _Router:Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this._AuthPersonService.userData.getValue()!=null) {
        return true;
      } 
      else {
        this._Router.navigate(['/login'])
        return false;
        
      }


    }
  
}
