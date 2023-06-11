import { Component } from '@angular/core';
import { Hospital } from 'src/app/interface/Hospital';
import { User } from 'src/app/interface/Users';
import { HospitalService } from 'src/app/services/hospital.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.scss']
})
export class InitialScreenComponent {
  totalOfHospitals: number  = 0;
  totalOfDonations: number = 0;
  cancelledDonations: number = 0;
  doneDonations: number = 0;
  totalOfUsers: number = 0;

  HospitalList: Hospital[] = [];
  UserList: User[] = [];

  constructor(
    private service: HospitalService,
    private userService: UserService,
  ){}

  ngOnInit(){
    this.completeHospitalsSettings();
    this.completeUserSettings();
  }

  async completeHospitalsSettings(): Promise<void>{
    try{
      this.HospitalList = await this.service.getAllHospitals();

      this.HospitalList.forEach((hospital) => {
        this.totalOfHospitals = this.totalOfHospitals + 1;
        this.totalOfDonations = this.totalOfDonations + hospital.donations_orders;
        this.cancelledDonations = this.cancelledDonations + hospital.donations_orders_cancelled;
        this.doneDonations = this.doneDonations + hospital.donations_orders_done;
      })
    }catch (error){
      console.log(error)
    }
  }

  async completeUserSettings(): Promise<void>{
    try{
      this.UserList = await this.userService.getAllUsers();

      this.UserList.forEach((user) => {
        this.totalOfUsers = this.totalOfUsers + 1;
      })
    }catch(error){
      console.log(error)
    }
  }
}
