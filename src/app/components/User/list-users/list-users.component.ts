import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  UsersList: User[] = []

  constructor(private user_service: UserService, private router: Router){}

  ngOnInit(){
    this.listUsers();
  }

  navigateToNewUser(){
    this.router.navigate(['/adduser'])
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
