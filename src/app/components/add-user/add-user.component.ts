import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { EvaluatorService } from '../../services/evaluator.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  credentials: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
  });
  generatedPassword: string;
  usernameRemote: string;

  constructor(
    private fb: FormBuilder,
    private evaluatorService: EvaluatorService,
    private notificationService: NotificationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.credentials.valid) {
      this.loadingService.loading$.next(true);
      this.evaluatorService
        .addEvaluator({
          Username: this.credentials.value.username,
          FirstName: this.credentials.value.fname,
          LastName: this.credentials.value.lname,
        })
        .subscribe(
          (resp: any) => {
            this.generatedPassword = resp.password;
            this.usernameRemote = resp.username;
          },
          (error: any) => {
            this.notificationService.notification$.next(
              "La creation de l'evaluateur a echoué"
            );
          }
        )
        .add(() => this.loadingService.loading$.next(false));
    } else {
      this.notificationService.notification$.next(
        'Les données ne sont pas valides.'
      );
    }
  }
}
