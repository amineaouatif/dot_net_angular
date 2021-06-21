import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Justificatif {
  id: string;
  remoteFileName: string;
  localFileName: string;
  documentName: string;
}

interface JustificatifLight {
  fileName: string;
  documentName: string;
}

interface Candidature {
  donneesPersonnelles: {
    nom: string;
    prenom: string;
    departement: string;
    dateRecrutement: string;
    grade: string;
    telephone: string;
    fax: string;
    email: string;
  };

  passageCadreGrade: {
    typePassage: string;
    cadreGrade: string;
  };

  activitesPedagogiques: {
    productionPedagogique: {
      ouvragesManuels: Array<JustificatifLight>;
      polycopiesEnseignement: Array<JustificatifLight>;
      supportsProcedesDidactiques: Array<JustificatifLight>;
    };
    encadrementPedagogique: {
      encadrementProjetsPFE: Array<JustificatifLight>;
      encadrementProjetsPFA: Array<JustificatifLight>;
      memoiresFinEtudesMaster: Array<JustificatifLight>;
      encadrementStages: Array<JustificatifLight>;
      encadrementRessourcesHumaines: Array<JustificatifLight>;
    };
    responsabilitesPedagogiquesAdministratives: {
      gestionDepartement: Array<JustificatifLight>;
      responsableFiliereModule: Array<JustificatifLight>;
      gestionFormationUniversitairePrepa: Array<JustificatifLight>;
      gestionFormationUniversitaireIng: Array<JustificatifLight>;
      membreConseilUniversite: Array<JustificatifLight>;
      membreCommissionParitaire: Array<JustificatifLight>;
      membreConseilEtablissement: Array<JustificatifLight>;
      membreCommissionScientifique: Array<JustificatifLight>;
      membreCommissionReformeExpertisePedagogique: Array<JustificatifLight>;
    };
  };

  activitesRecherche: {
    productionScientifique: {
      articlesScientifiquesCategorie1: Array<JustificatifLight>;
      articlesScientifiquesCategorie2: Array<JustificatifLight>;
      ouvragesRechercheScientifiques: Array<JustificatifLight>;
      publicationsActesCongres: Array<JustificatifLight>;
    };
    encadrementScientifique: {
      encadrementCoencadrementThesesDoctorat: Array<JustificatifLight>;
      encadrementCoencadrementTravauxRechercheMaster: Array<JustificatifLight>;
      RapporteurMembreJury: Array<JustificatifLight>;
    };
    responsabilitesScientifiques: {
      laboratoireEquipeCed: Array<JustificatifLight>;
      polesCompetenceReseaux: Array<JustificatifLight>;
      cedDoctoratMaster: Array<JustificatifLight>;
      projetsContratsRechercheFinances: Array<JustificatifLight>;
      activitesExpertiseEvaluationsScientifiques: Array<JustificatifLight>;
      organisationManifestationsScientifiques: Array<JustificatifLight>;
      organisationSeminaire: Array<JustificatifLight>;
    };
  };
}

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css'],
})
export class CandidatureComponent implements OnInit {
  candidature: Candidature = <Candidature>{};

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

  submit() {
    this.candidature.donneesPersonnelles = this.donneesPersonnelles.value;
    this.candidature.passageCadreGrade = this.passageCadreGrade.value;

    const productionPedagogique = {
      ouvragesManuels: this.lightenJustificatif(this.ouvragesManuels),
      polycopiesEnseignement: this.lightenJustificatif(
        this.polycopiesEnseignement
      ),
      supportsProcedesDidactiques: this.lightenJustificatif(
        this.supportsProcedesDidactiques
      ),
    };

    const encadrementPedagogique = {
      encadrementProjetsPFE: this.lightenJustificatif(
        this.encadrementProjetsPFE
      ),
      encadrementProjetsPFA: this.lightenJustificatif(
        this.encadrementProjetsPFA
      ),
      memoiresFinEtudesMaster: this.lightenJustificatif(
        this.memoiresFinEtudesMaster
      ),
      encadrementStages: this.lightenJustificatif(this.encadrementStages),
      encadrementRessourcesHumaines: this.lightenJustificatif(
        this.encadrementRessourcesHumaines
      ),
    };

    const responsabilitesPedagogiquesAdministratives = {
      gestionDepartement: this.lightenJustificatif(this.gestionDepartement),
      responsableFiliereModule: this.lightenJustificatif(
        this.responsableFiliereModule
      ),
      gestionFormationUniversitairePrepa: this.lightenJustificatif(
        this.gestionFormationUniversitairePrepa
      ),
      gestionFormationUniversitaireIng: this.lightenJustificatif(
        this.gestionFormationUniversitaireIng
      ),
      membreConseilUniversite: this.lightenJustificatif(
        this.membreConseilUniversite
      ),
      membreCommissionParitaire: this.lightenJustificatif(
        this.membreCommissionParitaire
      ),
      membreConseilEtablissement: this.lightenJustificatif(
        this.membreConseilEtablissement
      ),
      membreCommissionScientifique: this.lightenJustificatif(
        this.membreCommissionScientifique
      ),
      membreCommissionReformeExpertisePedagogique: this.lightenJustificatif(
        this.membreCommissionReformeExpertisePedagogique
      ),
    };
    const productionScientifique = {
      articlesScientifiquesCategorie1: this.lightenJustificatif(
        this.articlesScientifiquesCategorie1
      ),
      articlesScientifiquesCategorie2: this.lightenJustificatif(
        this.articlesScientifiquesCategorie2
      ),
      ouvragesRechercheScientifiques: this.lightenJustificatif(
        this.ouvragesRechercheScientifiques
      ),
      publicationsActesCongres: this.lightenJustificatif(
        this.publicationsActesCongres
      ),
    };

    const encadrementScientifique = {
      encadrementCoencadrementThesesDoctorat: this.lightenJustificatif(
        this.encadrementCoencadrementThesesDoctorat
      ),
      encadrementCoencadrementTravauxRechercheMaster: this.lightenJustificatif(
        this.encadrementCoencadrementTravauxRechercheMaster
      ),
      RapporteurMembreJury: this.lightenJustificatif(this.RapporteurMembreJury),
    };

    const responsabilitesScientifiques = {
      laboratoireEquipeCed: this.lightenJustificatif(this.laboratoireEquipeCed),
      polesCompetenceReseaux: this.lightenJustificatif(
        this.polesCompetenceReseaux
      ),
      cedDoctoratMaster: this.lightenJustificatif(this.cedDoctoratMaster),
      projetsContratsRechercheFinances: this.lightenJustificatif(
        this.projetsContratsRechercheFinances
      ),
      activitesExpertiseEvaluationsScientifiques: this.lightenJustificatif(
        this.activitesExpertiseEvaluationsScientifiques
      ),
      organisationManifestationsScientifiques: this.lightenJustificatif(
        this.organisationManifestationsScientifiques
      ),
      organisationSeminaire: this.lightenJustificatif(
        this.organisationSeminaire
      ),
    };

    this.candidature.activitesPedagogiques = {
      productionPedagogique,
      encadrementPedagogique,
      responsabilitesPedagogiquesAdministratives,
    };

    this.candidature.activitesRecherche = {
      productionScientifique,
      encadrementScientifique,
      responsabilitesScientifiques,
    };

    console.log(this.candidature);
  }

  private lightenJustificatif(
    justificatifArray: Array<Justificatif>
  ): Array<JustificatifLight> {
    return justificatifArray.map((justificatif: Justificatif) => {
      return {
        fileName: justificatif.remoteFileName,
        documentName: justificatif.documentName,
      };
    });
  }
}
