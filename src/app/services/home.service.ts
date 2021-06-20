import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getEvaluators(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users/evaluators`);
  }
}
