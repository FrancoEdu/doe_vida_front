import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  Login!: FormGroup;
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(public service: HospitalService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.Login = this.formBuilder.group({
      login: [this.username, Validators.compose([
        Validators.required,
      ])],
      password: [this.password, Validators.compose([
        Validators.required
      ])]
    })
  }

  async AuthenticationMethod(): Promise<void>{
    if(this.Login.valid){
      let result;
      try{
        this.isLoading=true;
        result = await this.service.login(this.username,this.password)
        this.router.navigate(['/listHospitals'])
      }catch(error){
        if(error instanceof Error && error.message === 'User not found'){
          this.errorMessage = "Usuário não encontrado na base de dados !"
        }else if(error instanceof Error && error.message === 'Wrong password'){
          this.errorMessage = "Senha incorreta, tente novamente..."
        }
      }finally{
        this.isLoading = false
      }
    }
  }
}
