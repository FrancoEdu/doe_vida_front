import { Injectable } from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { cookieService } from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private cookieService: cookieService) {}

  canActivate(): boolean{
    const isAuthenticate = this.cookieService.check('access_token');

    if(isAuthenticate){
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
