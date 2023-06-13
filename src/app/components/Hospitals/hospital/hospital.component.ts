import { Component, Input, OnInit } from '@angular/core';
import { Hospital } from '../../../interface/Hospital';
import { States } from 'src/app/enums/states';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit{
  @Input() hospital: Hospital = {
    city_name: "",
    donations_orders: 0,
    donations_orders_cancelled: 0,
    donations_orders_done: 0,
    hospital_name: "",
    id: "",
    state: 0,
  }

  constructor(private hospital_service:HospitalService){}

  ngOnInit(): void {
  }

  verifyWhatIsTheState(hospital: number): string{
    for(const states of Object.values(States)){
      if(hospital === states){
        const state = States[states]
        return state;
      }
    }
    return ""
  }

  async deleteHospital(hospital_name: string): Promise<any>{
    try{
      await this.hospital_service.delete(hospital_name)
      alert("Hospital Deletado")
      window.location.reload();
    }catch(error){
      alert("Ocorreu um erro ao deletar o hospital")
      console.log(error)
    }
  }
}
