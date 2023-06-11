import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { ListHospitalsComponent } from './components/list-hospitals/list-hospitals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HospitalComponent } from './components/hospital/hospital.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialScreenComponent,
    ListHospitalsComponent,
    HospitalComponent,
    LoginScreenComponent,
    BoardAdminComponent
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
