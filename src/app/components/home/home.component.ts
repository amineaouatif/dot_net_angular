import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  candidats = [
    {
      nom: 'Louella',
      departement: 'Berget',
      grade: 'Angela',
    },
    {
      nom: 'Bill',
      departement: 'Judy',
      grade: 'Halette',
    },
    {
      nom: 'Lanae',
      departement: 'Angela',
      grade: 'Carmencita',
    },
    {
      nom: 'Margette',
      departement: 'Queenie',
      grade: 'Nariko',
    },
    {
      nom: 'Yetty',
      departement: 'Luci',
      grade: 'Annice',
    },
    {
      nom: 'Queenie',
      departement: 'Shirlee',
      grade: 'Chandra',
    },
    {
      nom: 'Pamella',
      departement: 'Elie',
      grade: 'Averyl',
    },
  ];
  evaluateurs = [];
  constructor() {}

  ngOnInit(): void {}
}
