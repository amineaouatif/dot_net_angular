import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatureDto } from '../dto/candidature.dto';
import { Candidature } from '../interfaces/candidature';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  constructor(readonly http: HttpClient) {}

  addCandidature(candidature: Candidature): Observable<CandidatureDto> {
    const candidatureStr = JSON.stringify(candidature);
    return this.http.post<CandidatureDto>(
      `${environment.api}/candidature/new`,
      {
        candidature: candidatureStr,
      }
    );
  }
}
