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
  grades = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];
  cadreGrade = [
    { name: '[PES] Grade A à grade B', value: 'PESAB' },
    { name: '[PES] Grade B à grade C', value: 'PESBC' },
    { name: '[PH] Grade A à grade B', value: 'PHAB' },
    { name: '[PH] Grade B à grade C', value: 'PHBC' },
    { name: '[PA] Grade A à grade B', value: 'PAAB' },
    { name: '[PA] Grade B à grade C', value: 'PABC' },
    { name: '[PA] Grade C à grade D', value: 'PACD' },
  ];
  typeAvancement = [
    { name: 'Passage Exceptionnel', value: 'E' },
    { name: 'Passage Rapide', value: 'R' },
    { name: 'Passage Normal', value: 'N' },
  ];

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
    cadreGrade: new FormControl('', Validators.required),
  });

  ouvragesManuels: Array<Justificatif> = [];
  polycopiesEnseignement: Array<Justificatif> = [];
  supportsProcedesDidactiques: Array<Justificatif> = [];
  encadrementProjetsPFE: Array<Justificatif> = [];
  encadrementProjetsPFA: Array<Justificatif> = [];
  memoiresFinEtudesMaster: Array<Justificatif> = [];
  encadrementStages: Array<Justificatif> = [];
  encadrementRessourcesHumaines: Array<Justificatif> = [];
  gestionDepartement: Array<Justificatif> = [];
  responsableFiliereModule: Array<Justificatif> = [];
  gestionFormationUniversitairePrepa: Array<Justificatif> = [];
  gestionFormationUniversitaireIng: Array<Justificatif> = [];
  membreConseilUniversite: Array<Justificatif> = [];
  membreCommissionParitaire: Array<Justificatif> = [];
  membreConseilEtablissement: Array<Justificatif> = [];
  membreCommissionScientifique: Array<Justificatif> = [];
  membreCommissionReformeExpertisePedagogique: Array<Justificatif> = [];
  articlesScientifiquesCategorie1: Array<Justificatif> = [];
  articlesScientifiquesCategorie2: Array<Justificatif> = [];
  ouvragesRechercheScientifiques: Array<Justificatif> = [];
  publicationsActesCongres: Array<Justificatif> = [];
  encadrementCoencadrementThesesDoctorat: Array<Justificatif> = [];
  encadrementCoencadrementTravauxRechercheMaster: Array<Justificatif> = [];
  RapporteurMembreJury: Array<Justificatif> = [];
  laboratoireEquipeCed: Array<Justificatif> = [];
  polesCompetenceReseaux: Array<Justificatif> = [];
  cedDoctoratMaster: Array<Justificatif> = [];
  projetsContratsRechercheFinances: Array<Justificatif> = [];
  activitesExpertiseEvaluationsScientifiques: Array<Justificatif> = [];
  organisationManifestationsScientifiques: Array<Justificatif> = [];
  organisationSeminaire: Array<Justificatif> = [];

  constructor() {}

  ngOnInit(): void {}
}
