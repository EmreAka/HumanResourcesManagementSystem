import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './layouts/app-bar/app-bar.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SidebarComponent } from './layouts/home-layout/sidebar/sidebar.component';
import { ClientRequestsComponent } from './components/client-requests/client-requests.component';
import { ClientRequestComponent } from './components/client-requests/components/client-request/client-request.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    HomeLayoutComponent,
    SidebarComponent,
    ClientRequestsComponent,
    ClientRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
