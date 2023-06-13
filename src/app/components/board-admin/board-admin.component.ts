import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent {

  constructor(private cookie: cookieService, private router: Router) {}

  navigateToBoard(){
    this.router.navigate(['/board/initial'])
  }

  navigateToHospitals(){
    this.router.navigate(['board/hospitals'])
  }

  navigateToUsers(){
    this.router.navigate(['/board/users'])
  }

  logout(){
    this.cookie.delete('access_token');
    this.router.navigate(['/login']);
  }
}
