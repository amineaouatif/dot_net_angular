import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading$: ReplaySubject<boolean> = new ReplaySubject();

  constructor() {}
}
