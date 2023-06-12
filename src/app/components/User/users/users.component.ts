import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/Users';
import { UserService } from 'src/app/services/user.service';

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
    id: 0,
  }

  constructor(private router: Router,private user_service: UserService) {}

  navigateToEditForm(usename: string) {
    this.router.navigate(['/board/users', usename]);
  }

  async deleteUser(username: string): Promise<any>{
    try{
      await this.user_service.delete(this.users, username)
      alert("Usuário Deletado")
      window.location.reload();
    }catch(error){
      alert("Ocorreu um erro com o delete do usuário...")
      console.log(error)
    }
  }
}
