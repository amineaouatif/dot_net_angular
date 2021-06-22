import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { CandidatureService } from '../../services/candidature.service';

import { Candidature, JustificatifLight } from '../../interfaces/candidature';
import { MatStepper } from '@angular/material/stepper';

interface Justificatif {
  id: string;
  remoteFileName: string;
  localFileName: string;
  documentName: string;
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

  donneesPersonnelles: FormGroup;

  passageCadreGrade: FormGroup;

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
  gestionFormationUniversitaire: Array<Justificatif> = [];
  enseignementMaster: Array<Justificatif> = [];
  membreConseilUniversite: Array<Justificatif> = [];
  membreCommissionParitaire: Array<Justificatif> = [];
  membreConseilEtablissement: Array<Justificatif> = [];
  membreCommissionScientifique: Array<Justificatif> = [];
  membreCommissionReformeExpertisePedagogique: Array<Justificatif> = [];

  articlesScientifiquesCategorie1: Array<Justificatif> = [];
  articlesScientifiquesCategorie2: Array<Justificatif> = [];
  ouvragesRechercheScientifiques: Array<Justificatif> = [];
  publicationsActesCongres: Array<Justificatif> = [];
  depotBrevetsRealisationPrototypes: Array<Justificatif> = [];

  encadrementCoencadrementThesesDoctorat: Array<Justificatif> = [];
  encadrementCoencadrementTravauxRechercheMaster: Array<Justificatif> = [];
  rapporteurMembreJuryNote: Array<Justificatif> = [];

  laboratoireEquipeCed: Array<Justificatif> = [];
  polesCompetenceReseaux: Array<Justificatif> = [];
  cedDoctoratMaster: Array<Justificatif> = [];
  projetsContratsRechercheFinances: Array<Justificatif> = [];
  activitesExpertiseEvaluationsScientifiques: Array<Justificatif> = [];
  organisationManifestationsScientifiques: Array<Justificatif> = [];
  organisationSeminaire: Array<Justificatif> = [];

  tokenCandidature: string;

  constructor(
    readonly candidatureService: CandidatureService,
    private notificationService: NotificationService
  ) {
    this.createForms();
  }

  ngOnInit(): void {}

  submit(stepper: MatStepper) {
    if (this.donneesPersonnelles.valid && this.passageCadreGrade.valid) {
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
        gestionFormationUniversitaire: this.lightenJustificatif(
          this.gestionFormationUniversitaire
        ),
        enseignementMaster: this.lightenJustificatif(this.enseignementMaster),
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
        depotBrevetsRealisationPrototypes: this.lightenJustificatif(
          this.depotBrevetsRealisationPrototypes
        ),
      };

      const encadrementScientifique = {
        encadrementCoencadrementThesesDoctorat: this.lightenJustificatif(
          this.encadrementCoencadrementThesesDoctorat
        ),
        encadrementCoencadrementTravauxRechercheMaster:
          this.lightenJustificatif(
            this.encadrementCoencadrementTravauxRechercheMaster
          ),
        rapporteurMembreJuryNote: this.lightenJustificatif(
          this.rapporteurMembreJuryNote
        ),
      };

      const responsabilitesScientifiques = {
        laboratoireEquipeCed: this.lightenJustificatif(
          this.laboratoireEquipeCed
        ),
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
      this.candidatureService.addCandidature(this.candidature).subscribe(
        (resp: any) => {
          console.log(resp);
          this.notificationService.notification$.next(
            'Candidature envoyé avec succès.'
          );
          this.createForms();
          this.candidature = <Candidature>{};
          stepper.reset();
          this.tokenCandidature = resp.refrenceToken;
        },
        (error) => {
          this.notificationService.notification$.next(
            "Une erreur s'est produite."
          );
        }
      );
    } else {
      this.validateAllFormFields(this.donneesPersonnelles);
      this.validateAllFormFields(this.passageCadreGrade);
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private createForms() {
    this.donneesPersonnelles = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      departement: new FormControl('', Validators.required),
      dateRecrutement: new FormControl('', Validators.required),
      grade: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      fax: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });

    this.passageCadreGrade = new FormGroup({
      typePassage: new FormControl('', Validators.required),
      cadreGrade: new FormControl('', Validators.required),
    });
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
