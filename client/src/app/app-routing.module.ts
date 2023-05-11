import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ApidashboardComponent } from './apidashboard/apidashboard.component';
import { ExcelComponent } from './excel/excel.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'collections', component: HomeComponent },
  { path: 'api', component: ApidashboardComponent },

  { path: 'landingpage', component: LandingpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'docs', component: DocumentationComponent },
  { path: 'userdash', component: UserDashboardComponent },
  { path: 'excelgenerator', component: ExcelComponent },
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
