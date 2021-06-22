import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home.service';
import { SimpleCandidature } from '../../dto/simpleCandidature.dto';
import { User } from '../../dto/user.dto';
import { EvaluatorService } from 'src/app/services/evaluator.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  evaluateurs: User[] = [];
  candidats: SimpleCandidature[] = [];
  constructor(
    readonly homeService: HomeService,
    readonly evaluatorService: EvaluatorService,
    readonly dialog: MatDialog
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
    this.evaluatorService.toggleEvaluatorBlock(id);
    this.evaluateurs.map((evaluator) => {
      if (evaluator.id == id) evaluator.blocked = !evaluator.blocked;
    });
  }
}
