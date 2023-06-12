import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() users: User ={
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    birthdate: "",
    blood_type: "",
    phone: "",
    sex: false,
    qty_donations: 0,
    date_last_donation: "",
    state: "",
    city: "",
  }

  ngOnInit():void{

  }
}
