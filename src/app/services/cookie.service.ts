import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';

const expiresDate = new Date();
expiresDate.setDate(expiresDate.getMinutes() + 60);

@Injectable({
  providedIn: 'root'
})
export class cookieService{
  constructor(private cookieService: CookieService){}

  set(name: string, cookie: string){
    this.cookieService.set(name, cookie, expiresDate);
  }

  get(name: string){
    return this.cookieService.get(name);
  }

  check(name: string){
    return this.cookieService.check(name);
  }
}
