import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { SubmittedCandidatureComponent } from './components/submitted-candidature/submitted-candidature.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [NoAuthGuard],
    redirectTo: 'candidature',
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'candidature',
    component: CandidatureComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'candidature/submitted',
    component: SubmittedCandidatureComponent,
    canActivate: [NoAuthGuard],
  },
  { path: 'login', component: LogInComponent },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
  {
    path: 'evaluation/:id',
    component: EvaluationComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LogInComponent, canActivate: [NoAuthGuard] },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'candidature' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
