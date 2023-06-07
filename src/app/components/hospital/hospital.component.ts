import { Component, Input, OnInit } from '@angular/core';
import { Hospital } from '../../interface/Hospital';
import { States } from 'src/app/enums/states';

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
}
