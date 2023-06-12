import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cookieService } from 'src/app/services/cookie.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(
    public service: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: cookieService
  ){}

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
        result = await this.service.login(this.username,this.password);
        console.log(result.access_token)
        this.cookie.set('access_token', result.access_token);
        this.router.navigate(['/board'])
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
