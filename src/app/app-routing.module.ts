import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComplaintsComponent } from './Admin/view-complaints/view-complaints.component';
import { LoginComponent } from './Cutomer/login/login.component';
import { SignupComponent } from './Cutomer/signup/signup.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CustomerListComponent } from './Admin/customer-list/customer-list.component';
import { EngineerListComponent } from './Admin/engineer-list/engineer-list.component';
import { ManagerListComponent } from './Admin/manager-list/manager-list.component';
import { RegisterComplaintsComponent } from './Cutomer/register-complaints/register-complaints.component';
import { ViewRegisteredComplaintsComponent } from './Manager/view-registered-complaints/view-registered-complaints.component';
import { CreateWorkItemComponent } from './Manager/create-work-item/create-work-item.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ManagerLoginComponent } from './Manager/manager-login/manager-login.component';
import { EngineerLoginComponent } from './Engineer/engineer-login/engineer-login.component';
import { ViewWorkItemComponent } from './Engineer/view-work-item/view-work-item.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'signup',component:SignupComponent },
  { path:'adminHome', component:AdminHomeComponent },
  { path:'customerList', component:CustomerListComponent },
  { path:'viewComplaint/:id',component:ViewComplaintsComponent},
  { path:'engineerList' , component:EngineerListComponent },
  { path:'managerList', component:ManagerListComponent  },
  { path:'registerComplaints', component:RegisterComplaintsComponent},
  { path:'viewRegisteredComplaints', component:ViewRegisteredComplaintsComponent },
  { path:'createWorkItem/:id', component:CreateWorkItemComponent },
  { path:'home',component:HomeComponent },
  { path:'',component:HomeComponent },
  { path:'adminLogin', component:AdminLoginComponent },
  { path:'managerLogin',component:ManagerLoginComponent },
  { path:'engineerLogin', component:EngineerLoginComponent  },
  { path:'viewWorkItem', component:ViewWorkItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
