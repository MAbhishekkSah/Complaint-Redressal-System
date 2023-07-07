import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewComplaintsComponent } from './Admin/view-complaints/view-complaints.component';
import { LoginComponent } from './Cutomer/login/login.component';
import { SignupComponent } from './Cutomer/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CustomerListComponent } from './Admin/customer-list/customer-list.component';
import { EngineerListComponent } from './Admin/engineer-list/engineer-list.component';
import { ManagerListComponent } from './Admin/manager-list/manager-list.component';
import { RegisterComplaintsComponent } from './Cutomer/register-complaints/register-complaints.component';
import { ViewRegisteredComplaintsComponent } from './Manager/view-registered-complaints/view-registered-complaints.component';
import { CreateWorkItemComponent } from './Manager/create-work-item/create-work-item.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ManagerLoginComponent } from './Manager/manager-login/manager-login.component';
import { EngineerLoginComponent } from './Engineer/engineer-login/engineer-login.component';
import { ViewWorkItemComponent } from './Engineer/view-work-item/view-work-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComplaintsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminHomeComponent,
    CustomerListComponent,
    EngineerListComponent,
    ManagerListComponent,
    RegisterComplaintsComponent,
    ViewRegisteredComplaintsComponent,
    CreateWorkItemComponent,
    AdminLoginComponent,
    ManagerLoginComponent,
    EngineerLoginComponent,
    ViewWorkItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
