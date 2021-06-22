import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'candidature', component: CandidatureComponent },
  {
    path: 'evaluation',
    component: EvaluationComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LogInComponent, canActivate: [NoAuthGuard] },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
