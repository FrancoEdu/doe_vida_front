import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/Users';
import { cookieService } from 'src/app/services/cookie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent {
  user: User = {
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

  loading: boolean = false;

  constructor(
    private user_service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    this.route.params.subscribe(param => {
      const username = param['username']
      this.loadUserInfos(username);
    })

  }

  async loadUserInfos(username: string): Promise<any>{
    try{
      const user = await this.user_service.getUserByUsername(username);
      this.user = user
    }catch(error){
      console.log(error)
    }finally{
      this.loading = true;
    }
  }

  async updateUser(): Promise<void>{
    try {
      await this.user_service.updateUser(this.user, this.user.username);
    } catch (error) {
      console.log(error);
    }
  }
}
