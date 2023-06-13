import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent {
  formulario: FormGroup;

  user = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private user_service: UserService){
    this.formulario = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/) // Caracteres especiais
      ])
    });
  }

  navigateToBoardUsers(){
    this.router.navigate(['/board/users'])
  }

  async saveUser(): Promise<any>{
    try{
      const response = await this.user_service.create(this.user.username, this.user.password);
      alert("Usuário criado com sucesso");
      this.router.navigate(['/board/users'])
    }catch(error){
      console.log(error)
    }
  }
}
