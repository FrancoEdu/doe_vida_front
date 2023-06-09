import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      try{
        const result = await this.service.login(this.username,this.password)
        this.router.navigate(['/listHospitals']);
      }catch(error){
        console.log(error)
      }
    }
  }
}
