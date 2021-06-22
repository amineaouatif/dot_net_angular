import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home.service';
import { CandidatureDto } from '../../dto/candidature.dto';
import { User } from '../../dto/user.dto';
import { EvaluatorService } from 'src/app/services/evaluator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  evaluateurs: User[] = [];
  candidats: CandidatureDto[] = [];
  constructor(
    readonly homeService: HomeService,
    readonly evaluatorService: EvaluatorService
  ) {}

  ngOnInit(): void {
    this.homeService.getEvaluators().subscribe((evals) => {
      this.evaluateurs = evals;
      console.log(this.evaluateurs);
    });
    this.homeService.getAllCandidatures().subscribe((candidatures) => {
      this.candidats = candidatures;
    });
  }

  toggleBlock(id: number) {
    this.evaluatorService.toggleEvaluatorBlock(id).subscribe(() => {
      this.evaluateurs.map((evaluator) => {
        if (evaluator.id == id) evaluator.blocked = !evaluator.blocked;
      });
    });
  }
}
