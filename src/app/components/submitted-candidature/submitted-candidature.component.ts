import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatureDto } from 'src/app/dto/candidature.dto';
import { Candidature } from 'src/app/interfaces/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-submitted-candidature',
  templateUrl: './submitted-candidature.component.html',
  styleUrls: ['./submitted-candidature.component.css'],
})
export class SubmittedCandidatureComponent implements OnInit {
  candidatureDto: CandidatureDto;
  candidature: Candidature;
  token: string;
  constructor(
    readonly candidatureService: CandidatureService,
    readonly route: ActivatedRoute,
    readonly router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params.token) {
        this.token = params.token;
      }
    });
    this.candidatureService.getCandidatureByToken(this.token).subscribe(
      (candidature) => {
        this.candidatureDto = candidature;
        this.candidature = JSON.parse(candidature.jsonContent);
      },
      (error) => {
        this.router.navigate(['candidature']);
      }
    );
  }

  ngOnInit(): void {}

  download(fileName: string) {
    const url = `${environment.api}/justificatives/${fileName}`;
    window.open(url);
  }
}
