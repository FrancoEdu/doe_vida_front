import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { ListHospitalsComponent } from './components/Hospitals/list-hospitals/list-hospitals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HospitalComponent } from './components/Hospitals/hospital/hospital.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ListUsersComponent } from './components/User/list-users/list-users.component';
import { UsersComponent } from './components/User/users/users.component';
import { UserEditFormComponent } from './components/User/user-edit-form/user-edit-form.component';
import { AddNewUserComponent } from './components/User/add-new-user/add-new-user.component';
import { AddNewHospitalComponent } from './components/Hospitals/add-new-hospital/add-new-hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialScreenComponent,
    ListHospitalsComponent,
    HospitalComponent,
    LoginScreenComponent,
    BoardAdminComponent,
    ListUsersComponent,
    UsersComponent,
    UserEditFormComponent,
    AddNewUserComponent,
    AddNewHospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
