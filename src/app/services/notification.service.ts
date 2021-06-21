import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification$: ReplaySubject<string> = new ReplaySubject();

  constructor() {}
}
