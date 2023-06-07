import { Component } from '@angular/core';
import { Hospital } from '../Hospital';
import { HospitalService } from '../Hospital.service';

@Component({
  selector: 'app-list-hospitals',
  templateUrl: './list-hospitals.component.html',
  styleUrls: ['./list-hospitals.component.scss']
})
export class ListHospitalsComponent {
  HospitalList: Hospital[] = [];

  constructor(private service: HospitalService){}

  ngOnInit(){
    this.service.list().subscribe((hospitals) => {
      this.HospitalList = hospitals
    })
  }
}
