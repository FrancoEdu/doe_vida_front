import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/interface/Hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-add-new-hospital',
  templateUrl: './add-new-hospital.component.html',
  styleUrls: ['./add-new-hospital.component.scss']
})
export class AddNewHospitalComponent {
  URLibge: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

  cidades: any[] = [];
  estados: any[] = [];

  formulario: FormGroup;

  hospital: Hospital = {
    city_name: "",
    hospital_name: "",
    state: 0,
  }

  ngOnInit(): void{
    this.printStatesAndCitys();
  }

  constructor(private router: Router, private hospital_service: HospitalService){
    this.formulario = new FormGroup({
      cityname: new FormControl('', Validators.required),
      hospitalname: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    })
  }

  navigateToBoardHospitals(){
    this.router.navigate(['/board/hospitals'])
  }

  async printStatesAndCitys(){
    this.estados = await this.consumeApiLogradouro()
  }

  async saveHospital(): Promise<any>{
    try{
      const response = await this.hospital_service.create(this.hospital.hospital_name, this.hospital.city_name, this.hospital.state);
      alert("Usuário criado com sucesso");
      this.router.navigate(['/board/users'])
    }catch(error){
      console.log(error)
    }
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
    const estadoId = this.hospital.state;
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

  async consumeCitys(estadoId: number): Promise<any[]> {
    try {
      const cidade = await fetch(`${this.URLibge}/${estadoId}/municipios`);
      const data = await cidade.json();
      const cidades = data.map((cidade: any) => ({ id: cidade.id, nome: cidade.nome }));
      return cidades;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
