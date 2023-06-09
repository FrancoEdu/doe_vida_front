import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent {

  constructor(private service: HospitalService, private router: Router){}

  ngOnInit(): void{

  }
}
