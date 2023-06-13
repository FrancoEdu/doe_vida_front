import { Component } from '@angular/core';
import { Hospital } from '../../../interface/Hospital';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hospitals',
  templateUrl: './list-hospitals.component.html',
  styleUrls: ['./list-hospitals.component.scss']
})
export class ListHospitalsComponent {
  HospitalList: Hospital[] = [];

  constructor(private service: HospitalService, private router: Router){}

  ngOnInit(){
    this.getAllHospitals();
  }

  navigateToNewHospital(){
    this.router.navigate(['/addhospital'])
  }

  async getAllHospitals(): Promise<void>{
    try{
      this.HospitalList = await this.service.getAllHospitals();
    } catch (error){
      console.log(error)
    }
  }
}
