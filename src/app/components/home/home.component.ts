import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home.service';
import { CandidatureDto } from '../../dto/candidature.dto';
import { User } from '../../dto/user.dto';
import { EvaluatorService } from '../../services/evaluator.service';
import { LoadingService } from '../../services/loading.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  evaluateurs: User[] = [];
  untreatedCandidatures: CandidatureDto[] = [];
  treatedCandidatures: CandidatureDto[] = [];
  loading = false;
  userRole: string;

  constructor(
    readonly homeService: HomeService,
    readonly evaluatorService: EvaluatorService,
    private loadingService: LoadingService,
    readonly authService: AuthService
  ) {
    this.authService.userRole$.subscribe((role) => {
      this.userRole = role;
      this.getData();
    });
  }

  ngOnInit(): void {}

  getData() {
    this.loadingService.loading$.next(true);
    this.loading = true;
    if (this.userRole == 'Admin')
      this.homeService
        .getEvaluators()
        .subscribe((evals) => {
          this.evaluateurs = evals;
        })
        .add(() => {
          this.loadingService.loading$.next(false);
        });

    this.homeService
      .getUntreatedCandidatures()
      .subscribe((candidatures) => {
        this.untreatedCandidatures = candidatures;
      })
      .add(() => {
        this.loadingService.loading$.next(false);
        this.loading = false;
      });

    this.homeService
      .getTreatedCandidatures()
      .subscribe((candidatures) => {
        this.treatedCandidatures = candidatures;
      })
      .add(() => {
        this.loadingService.loading$.next(false);
        this.loading = false;
      });
  }

  toggleBlock(id: number) {
    this.loadingService.loading$.next(true);
    this.evaluatorService
      .toggleEvaluatorBlock(id)
      .subscribe(() => {
        this.evaluateurs.map((evaluator) => {
          if (evaluator.id == id) evaluator.blocked = !evaluator.blocked;
        });
      })
      .add(() => this.loadingService.loading$.next(false));
  }
}
