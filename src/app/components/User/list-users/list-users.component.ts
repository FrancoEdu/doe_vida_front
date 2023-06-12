import { Component } from '@angular/core';
import { User } from 'src/app/interface/Users';
import { cookieService } from 'src/app/services/cookie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  UsersList: User[] = []

  constructor(private user_service: UserService){}

  ngOnInit(){
    this.listUsers();
  }

  async listUsers(): Promise<void>{
    try{
      this.UsersList = await this.user_service.getAllUsers();
      console.log(this.UsersList)
    }catch(error){
      console.log(error)
    }
  }
}
