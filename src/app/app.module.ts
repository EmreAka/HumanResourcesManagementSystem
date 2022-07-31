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
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
