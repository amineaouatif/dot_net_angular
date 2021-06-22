import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EvaluatorService {
  constructor(private http: HttpClient) {}

  addEvaluator(userData) {
    return this.http.post<any>(`${environment.api}/add-user`, userData);
  }

  toggleEvaluatorBlock(id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.api}/users/evaluators/block/` + id
    );
  }
}
