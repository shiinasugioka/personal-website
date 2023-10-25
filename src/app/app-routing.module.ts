import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'contact', component: ContactPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
