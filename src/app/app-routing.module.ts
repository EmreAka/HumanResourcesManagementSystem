import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLayoutComponent} from "./layouts/home-layout/home-layout.component";
import {ClientRequestsComponent} from "./components/client-requests/client-requests.component";
import {MyJobPostingsComponent} from "./components/my-job-postings/my-job-postings.component";
import {CreateJobPostingComponent} from "./components/create-job-posting/create-job-posting.component";
import {CreateJobPostingLayoutComponent} from "./layouts/create-job-posting-layout/create-job-posting-layout.component";

const routes: Routes = [
  {
    path: "", component: HomeLayoutComponent, children: [
      {path: "", component: ClientRequestsComponent, pathMatch: "full"},
      {path: "client-request", component: ClientRequestsComponent},
      {path: "my-job-postings", component: MyJobPostingsComponent},
    ]
  },
  {
    path: "create-job-postings", component: CreateJobPostingLayoutComponent, children: [
      {path: "", component: CreateJobPostingComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
