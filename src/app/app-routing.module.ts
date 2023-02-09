import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponentComponent } from './login-component/login-component.component';
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
    path:'list',
    component: ListViewComponent
  },
  {
    path:'login',
    component: LoginComponentComponent
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
