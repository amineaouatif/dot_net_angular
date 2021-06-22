import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home.service';
import { CandidatureDto } from '../../dto/candidature.dto';
import { User } from '../../dto/user.dto';
import { EvaluatorService } from '../../services/evaluator.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  evaluateurs: User[] = [];
  candidats: CandidatureDto[] = [];
  loading = false;

  constructor(
    readonly homeService: HomeService,
    readonly evaluatorService: EvaluatorService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.loading$.next(true);
    this.loading = true;
    this.homeService
      .getEvaluators()
      .subscribe((evals) => {
        this.evaluateurs = evals;
        console.log(this.evaluateurs);
      })
      .add(() => {
        this.loadingService.loading$.next(false);
      });

    this.homeService
      .getAllCandidatures()
      .subscribe((candidatures) => {
        this.candidats = candidatures;
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
