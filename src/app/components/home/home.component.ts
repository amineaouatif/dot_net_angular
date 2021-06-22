import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home.service';
import { SimpleCandidature } from '../../dto/simpleCandidature.dto';
import { User } from '../../dto/user.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  evaluateurs: User[] = [];
  candidats: SimpleCandidature[] = [];
  constructor(readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getEvaluators().subscribe((evals) => {
      this.evaluateurs = evals;
      console.log(this.evaluateurs);
    });
    this.homeService.getAllCandidatures().subscribe((candidatures) => {
      this.candidats = candidatures;
    });
  }
}
