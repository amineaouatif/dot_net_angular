import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

interface uploadResp {
  fileName: string;
}

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  upload(formData: FormData): Observable<uploadResp> {
    return this.http.post<uploadResp>(
      `${environment.api}/candidature/justificative`,
      formData
    );
  }
}
