import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuth: boolean;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar
  ) {
    this.authService.isAuthenticated.subscribe(
      (isAuth: boolean) => (this.isAuth = isAuth)
    );

    this.notificationService.notification$.subscribe((message: string) =>
      this._snackBar.open(message, '', {
        duration: 2 * 1000,
      })
    );
  }
}
