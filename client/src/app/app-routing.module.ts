import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ApidashboardComponent } from './apidashboard/apidashboard.component';

const routes: Routes = [
  { path: 'collections', component: HomeComponent },
  { path: 'api', component: ApidashboardComponent },

  { path: 'landingpage', component: LandingpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'docs', component: DocumentationComponent },
  { path: 'userdash', component: UserDashboardComponent },
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
