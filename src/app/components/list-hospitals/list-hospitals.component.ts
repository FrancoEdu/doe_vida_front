import { Component } from '@angular/core';
import { Hospital } from '../../interface/Hospital';

@Component({
  selector: 'app-list-hospitals',
  templateUrl: './list-hospitals.component.html',
  styleUrls: ['./list-hospitals.component.scss']
})
export class ListHospitalsComponent {
  HospitalList: Hospital[] = [];

  constructor(){}

  private url: string = "https://doevida.onrender.com/hospitals";

  async ngOnInit(): Promise<Hospital[]> {
    await fetch(this.url)
      .then((response) => response.json())
      .then((data) => this.HospitalList = data.hospitals)
    console.log(this.HospitalList)
    return this.HospitalList
  }
}
