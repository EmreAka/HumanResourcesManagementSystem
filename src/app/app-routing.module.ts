import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ClientRequestsComponent } from './components/client-requests/client-requests.component';
import { MyJobPostingsComponent } from './components/my-job-postings/my-job-postings.component';
import { CreateJobPostingComponent } from './components/create-job-posting/create-job-posting.component';
import { CreateJobPostingLayoutComponent } from './layouts/create-job-posting-layout/create-job-posting-layout.component';
import { LoginComponent } from './components/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { MySpecialClientRequestsComponent } from './components/my-special-client-requests/my-special-client-requests.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: ClientRequestsComponent,
        pathMatch: 'full',
        canActivate: [LoginGuard],
      },
      {
        path: 'client-request',
        component: ClientRequestsComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'my-job-postings',
        component: MyJobPostingsComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'my-special-client-requests',
        component: MySpecialClientRequestsComponent,
        canActivate: [LoginGuard],
      },
    ],
  },
  {
    path: 'create-job-postings',
    component: CreateJobPostingLayoutComponent,
    children: [{ path: '', component: CreateJobPostingComponent }],
  },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
