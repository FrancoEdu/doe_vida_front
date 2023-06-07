import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHospitalsComponent } from './components/list-hospitals/list-hospitals.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "initial",
    pathMatch: 'full',
  },{
    path: "listHospitals",
    component: ListHospitalsComponent
  },{
    path: 'initial',
    component: InitialScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
