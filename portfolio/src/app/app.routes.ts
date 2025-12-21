import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { CodingProfilesComponent } from './components/coding-profiles/coding-profiles.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'coding-profiles', component: CodingProfilesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent }
];
