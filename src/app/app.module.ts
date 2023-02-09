import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { HeaderComponent } from './header/header.component';

import {EmployeeServiceService} from './employee-service.service';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ListViewComponent } from './list-view/list-view.component';
import { FooterComponentComponent } from './footer-component/footer-component.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    EmployeeListingComponent,
    HeaderComponent,
    LoginComponentComponent,
    ListViewComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule

  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
