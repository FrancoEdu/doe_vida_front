import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHospitalsComponent } from './components/list-hospitals/list-hospitals.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full',
  },{
    path: "listHospitals",
    component: ListHospitalsComponent
  },{
    path: 'initial',
    component: InitialScreenComponent
  },{
    path: 'login',
    component: LoginScreenComponent
  },{
    path: 'board',
    component: BoardAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
