import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Justificatif {
  documentName: string;
  fileName: string;
}

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css'],
})
export class CandidatureComponent implements OnInit {
  gradeControl = new FormControl('', Validators.required);
  grades = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];

  donneesPersonnelles = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    departement: new FormControl('', Validators.required),
    dateRecrutement: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    fax: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dateDepot: new FormControl('', Validators.required),
  });

  passageCadreGrade = new FormGroup({
    typePassage: new FormControl('', Validators.required),
  });

  ouvragesOuManuels: Array<Justificatif> = [];
  polycopiesEnseignement: Array<Justificatif> = [];
  supportsEtProcedesDidactiques: Array<Justificatif> = [];
  encadrementProjetsPFE: Array<Justificatif> = [];
  encadrementProjetsPFA: Array<Justificatif> = [];
  memoiresdeFinEtudesMaster: Array<Justificatif> = [];
  encadrementDeStages: Array<Justificatif> = [];
  encadrementDeRessourcesHumaines: Array<Justificatif> = [];

  constructor() {}

  ngOnInit(): void {}
}
