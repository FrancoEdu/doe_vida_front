import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { ListHospitalsComponent } from './components/list-hospitals/list-hospitals.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HospitalComponent } from './components/hospital/hospital.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { AuthModule } from '@auth0/auth0-angular';
import * as dotenv from 'dotenv';

dotenv.config();

@NgModule({
  declarations: [
    AppComponent,
    InitialScreenComponent,
    ListHospitalsComponent,
    HospitalComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-4hrylgczk065j7nb.us.auth0.com',
      clientId: 'DdJ3mVSHDtgKkb68TDikIDvAuc3pFAnf',
      authorizationParams:{
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
