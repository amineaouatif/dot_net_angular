import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuth: boolean;
  loading = false;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.authService.isAuthenticated$.subscribe(
      (isAuth: boolean) => (this.isAuth = isAuth)
    );

    this.notificationService.notification$.subscribe((message: string) =>
      this._snackBar.open(message, '', {
        duration: 2 * 1000,
      })
    );

    this.loadingService.loading$.subscribe(
      (val: boolean) => (this.loading = val)
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
