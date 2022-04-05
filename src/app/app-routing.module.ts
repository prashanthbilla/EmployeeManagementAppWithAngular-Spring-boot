import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { LoginDispalyComponent } from './login-dispaly/login-dispaly.component';
import { UpdateOneEmployeeComponent } from './update-one-employee/update-one-employee.component';
import { SignupCreateComponent } from './signup-create/signup-create.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'app-login', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'app-login', component:LoginComponent},
  {path: 'success-login/:id', component:LoginDispalyComponent},
  {path: 'update-one/:id', component:UpdateOneEmployeeComponent},
  {path: 'signup', component:SignupCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
