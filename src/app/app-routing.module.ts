import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillssComponent } from './skillss/skillss.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,

  },
  {
    path:'skill',
    component:SkillssComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
