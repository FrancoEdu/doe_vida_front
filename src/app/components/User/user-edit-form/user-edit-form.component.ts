import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  URLibge: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

  cidades: any[] = [];
  estados: any[] = [];

  formulario: FormGroup;

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
  ){
    this.formulario = new FormGroup({
      username: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
      birthdate: new FormControl(),
      blood_type: new FormControl(),
      city: new FormControl(),
      phone: new FormControl(),
      sex: new FormControl(),
      state: new FormControl(),
    })
  }

  ngOnInit(): void{
    this.route.params.subscribe(param => {
      const username = param['username']
      this.loadUserInfos(username);
    })
    this.printStatesAndCitys();
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
      await this.user_service.updateUser(this.user.username, this.user.first_name, this.user.last_name, this.user.birthdate, this.user.blood_type, this.user.city, this.user.phone, this.user.sex, this.user.state);
      alert("Usuário atualizado com sucesso")
      this.router.navigate(['/board/users'])
    } catch (error) {
      console.log(error);
    }
  }

  async printStatesAndCitys(){
    this.estados = await this.consumeApiLogradouro()
  }

  async consumeApiLogradouro(): Promise<any[]>{
    try {
      const estados = await fetch(`${this.URLibge}`);
      const data = await estados.json();
      const estadosFormatados = data.map((estado: any) => ({
        id: estado.id, sigla: estado.sigla
      }));
      return estadosFormatados;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  onStateChange() {
    const estadoId = this.user.state;
    if (estadoId) {
      this.consumeCitys(estadoId).then(cidades => {
        this.cidades = cidades;
      }).catch(error => {
        console.log(error);
      });
    } else {
      this.cidades = [];
    }
  }

  async consumeCitys(sigla: string): Promise<any[]> {
    try {
      const cidade = await fetch(`${this.URLibge}/${sigla}/distritos`);
      const data = await cidade.json();
      const cidades = data.map((cidade: any) => ({ id: cidade.id, nome: cidade.nome }));
      return cidades;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  printTest(){
    console.log(`
      ${this.user.username},
      ${this.user.first_name},
      ${this.user.last_name},
      ${this.user.birthdate},
      ${this.user.blood_type},
      ${this.user.city},
      ${this.user.phone},
      ${this.user.sex},
      ${this.user.state}
    `)
  }
}
