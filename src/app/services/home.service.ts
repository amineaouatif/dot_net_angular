import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../dto/user.dto';
import { CandidatureDto } from '../dto/candidature.dto';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getEvaluators(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users/evaluators`);
  }

  getUntreatedCandidatures(): Observable<CandidatureDto[]> {
    return this.http.get<CandidatureDto[]>(
      `${environment.api}/candidature/untreated`
    );
  }
  getTreatedCandidatures(): Observable<CandidatureDto[]> {
    return this.http.get<CandidatureDto[]>(
      `${environment.api}/candidature/treated`
    );
  }
}
