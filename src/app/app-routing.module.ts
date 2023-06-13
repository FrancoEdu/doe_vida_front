import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { AuthGuard } from './services/auth.guard';
import { UserEditFormComponent } from './components/User/user-edit-form/user-edit-form.component';
import { ListHospitalsComponent } from './components/Hospitals/list-hospitals/list-hospitals.component';
import { ListUsersComponent } from './components/User/list-users/list-users.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { AddNewUserComponent } from './components/User/add-new-user/add-new-user.component';
import { AddNewHospitalComponent } from './components/Hospitals/add-new-hospital/add-new-hospital.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full',
  },{
    path: 'login',
    component: LoginScreenComponent
  },{
    path: 'board/initial',
    canActivate: [AuthGuard],
    component: InitialScreenComponent
  },{
    path: 'board/hospitals',
    canActivate: [AuthGuard],
    component: ListHospitalsComponent
  },{
    path: 'addhospital',
    canActivate: [AuthGuard],
    component: AddNewHospitalComponent
  },{
    path: 'board/users',
    canActivate: [AuthGuard],
    component: ListUsersComponent
  },{
    path: 'adduser',
    canActivate: [AuthGuard],
    component: AddNewUserComponent
  },{
    path: 'board/users/:username',
    canActivate: [AuthGuard],
    component: UserEditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
