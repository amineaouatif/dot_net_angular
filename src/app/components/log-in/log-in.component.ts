import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  login() {
    if (!!this.username && !!this.password) {
      this.loadingService.loading$.next(true);
      this.auth
        .login(this.username, this.password)
        .subscribe(
          () => {
            this.router.navigateByUrl('/home');
          },
          (error: any) => {
            if (
              error.error &&
              error.error.message === 'Username or password is incorrect'
            )
              this.notificationService.notification$.next(
                "Nom d'utilisateur ou mot de passe incorrect"
              );
            else
              this.notificationService.notification$.next(
                "Une erreur s'est produite."
              );
          }
        )
        .add(() => this.loadingService.loading$.next(false));
    }
  }
}
