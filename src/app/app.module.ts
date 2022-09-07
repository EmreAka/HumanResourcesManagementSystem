import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

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
import { CreateJobPostingLayoutComponent } from './layouts/create-job-posting-layout/create-job-posting-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MySpecialClientRequestsComponent } from './components/my-special-client-requests/my-special-client-requests.component';
import { CreateSpecialClientRequestComponent } from './components/create-special-client-request/create-special-client-request.component';

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
    CreateJobPostingLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    RegisterComponent,
    MySpecialClientRequestsComponent,
    CreateSpecialClientRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
