import { Component, Input } from '@angular/core';
import { Hospital } from '../Hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent {
  @Input() hospital: Hospital = {
    city_name: "",
    hospital_name: "",
    state: 0
  }
}
