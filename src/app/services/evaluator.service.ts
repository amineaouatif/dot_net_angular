import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EvaluatorService {
  constructor(private http: HttpClient) {}

  addEvaluator(userData) {
    return this.http.post<any>(`${environment.api}/add-user`, userData);
  }

  toggleEvaluatorBlock(id: number) {
    this.http.get(`${environment.api}` + 'users/evaluators/' + id);
  }
}
