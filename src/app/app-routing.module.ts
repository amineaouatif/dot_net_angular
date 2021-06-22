import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { SubmittedCandidatureComponent } from './components/submitted-candidature/submitted-candidature.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent },
  { path: 'candidature', component: CandidatureComponent },
  { path: 'evaluation/:id', component: EvaluationComponent },
  { path: 'candidature/submitted', component: SubmittedCandidatureComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-user', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
