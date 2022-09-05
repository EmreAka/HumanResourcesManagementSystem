import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './layouts/app-bar/app-bar.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SidebarComponent } from './layouts/home-layout/sidebar/sidebar.component';
import { ClientRequestsComponent } from './components/client-requests/client-requests.component';
import { ClientRequestComponent } from './components/client-requests/components/client-request/client-request.component';
import { MyJobPostingsComponent } from './components/my-job-postings/my-job-postings.component';
import { JobPostingCardComponent } from './components/my-job-postings/components/job-posting-card/job-posting-card.component';
import { CreateJobPostingComponent } from './components/create-job-posting/create-job-posting.component';
import { CategoryComponent } from './components/create-job-posting/components/category/category.component';
import { CreateJobPostingLayoutComponent } from './layouts/create-job-posting-layout/create-job-posting-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    HomeLayoutComponent,
    SidebarComponent,
    ClientRequestsComponent,
    ClientRequestComponent,
    MyJobPostingsComponent,
    JobPostingCardComponent,
    CreateJobPostingComponent,
    CategoryComponent,
    CreateJobPostingLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
