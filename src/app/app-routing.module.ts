import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeRegistrationComponent} from './employee-registration/employee-registration.component';
import {EmployeeListingComponent} from './employee-listing/employee-listing.component';



const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeListingComponent
  },
  {
    path:'registration',
    component: EmployeeRegistrationComponent
  },
  {
    path: '', redirectTo: 'registration', pathMatch: 'full'
  },
  {
    path: '**',
    component: EmployeeRegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
