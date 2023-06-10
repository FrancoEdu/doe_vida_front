import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHospitalsComponent } from './components/list-hospitals/list-hospitals.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full',
  },{
    path: 'login',
    component: LoginScreenComponent
  },{
    path: "listHospitals",
    canActivate: [AuthGuard],
    component: ListHospitalsComponent
  },{
    path: 'initial',
    canActivate: [AuthGuard],
    component: InitialScreenComponent
  },{
    path: 'board',
    canActivate: [AuthGuard],
    component: BoardAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
