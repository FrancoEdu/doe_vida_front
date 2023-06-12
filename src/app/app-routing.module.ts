import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { AuthGuard } from './services/auth.guard';
import { UserEditFormComponent } from './components/User/user-edit-form/user-edit-form.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full',
  },{
    path: 'login',
    component: LoginScreenComponent
  },{
    path: 'board',
    canActivate: [AuthGuard],
    component: BoardAdminComponent
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
