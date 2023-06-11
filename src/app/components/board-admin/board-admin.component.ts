import { Component } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent {

  currentComponent: string = '';

  constructor() {
    this.navigateToRouter('board'); // Carrega automaticamente 'board'
  }

  navigateToRouter(route: string) {
    // Limpar o conteúdo da div
    this.currentComponent = '';

    // Definir qual componente deve ser exibido com base na rota
    if (route === 'board') {
      this.currentComponent = 'initial-screen';
    } else if (route === 'users') {
      this.currentComponent = 'users';
    } else if (route === 'hospital') {
      this.currentComponent = 'list-hospitals';
    }
  }
}
