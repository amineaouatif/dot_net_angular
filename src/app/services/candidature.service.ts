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
  getCandidatureByToken(token: string): Observable<CandidatureDto> {
    return this.http.get<CandidatureDto>(
      `${environment.api}/candidature/submitted`,
      { params: { token: token } }
    );
  }
  getCandidatureById(id: string): Observable<CandidatureDto> {
    return this.http.get<CandidatureDto>(
      `${environment.api}/candidature/` + id
    );
  }
  updateCandidature(
    id: number,
    note: number,
    validation: number
  ): Observable<CandidatureDto> {
    return this.http.post<CandidatureDto>(
      `${environment.api}/candidature/update `,
      {
        id: id,
        note: note.toString,
        validated: validation,
      }
    );
  }
}
