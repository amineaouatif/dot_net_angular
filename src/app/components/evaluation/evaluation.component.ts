import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatureDto } from 'src/app/dto/candidature.dto';
import { CandidatureService } from 'src/app/services/candidature.service';
import { environment } from '../../../environments/environment';
import { Candidature } from '../../interfaces/candidature';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  candidatureDto: CandidatureDto;
  candidature: Candidature;

  note = 0;
  validated = 0;

  ouvragesManuelsNote = 0;
  polycopiesEnseignementNote = 0;
  supportsProcedesDidactiquesNote = 0;

  encadrementProjetsPFENote = 0;
  encadrementProjetsPFANote = 0;
  memoiresFinEtudesMasterNote = 0;
  encadrementStagesNote = 0;
  encadrementRessourcesHumainesNote = 0;

  gestionDepartementNote = 0;
  responsableFiliereModuleNote = 0;
  gestionFormationUniversitaireNote = 0;
  enseignementMasterNote = 0;
  membreConseilUniversiteNote = 0;
  membreCommissionParitaireNote = 0;
  membreConseilEtablissementNote = 0;
  membreCommissionScientifiqueNote = 0;
  membreCommissionReformeExpertisePedagogiqueNote = 0;

  articlesScientifiquesCategorie1Note = 0;
  articlesScientifiquesCategorie2Note = 0;
  ouvragesRechercheScientifiquesNote = 0;
  publicationsActesCongresNote = 0;
  depotBrevetsRealisationPrototypesNote = 0;

  encadrementCoencadrementThesesDoctoratNote = 0;
  encadrementCoencadrementTravauxRechercheMasterNote = 0;
  rapporteurMembreJuryNoteNote = 0;

  laboratoireEquipeCedNote = 0;
  polesCompetenceReseauxNote = 0;
  cedDoctoratMasterNote = 0;
  projetsContratsRechercheFinancesNote = 0;
  activitesExpertiseEvaluationsScientifiquesNote = 0;
  organisationManifestationsScientifiquesNote = 0;
  organisationSeminaireNote = 0;

  constructor(
    readonly candidatureService: CandidatureService,
    readonly route: ActivatedRoute,
    readonly router: Router,
    private loadingService: LoadingService
  ) {
    var token = '';
    this.route.paramMap.subscribe((paramMap) => {
      token = paramMap.get('id');
    });
    this.loadingService.loading$.next(true);
    this.candidatureService
      .getCandidatureById(token)
      .subscribe(
        (candidature) => {
          this.candidatureDto = candidature;
          this.candidature = JSON.parse(candidature.jsonContent);
        },
        (error) => {
          this.router.navigate(['home']);
        }
      )
      .add(() => this.loadingService.loading$.next(false));
  }

  download(fileName: string) {
    const url = `${environment.api}/justificatives/${fileName}`;
    window.open(url);
  }

  updateNote() {
    this.note =
      this.ouvragesManuelsNote +
      this.polycopiesEnseignementNote +
      this.supportsProcedesDidactiquesNote +
      this.encadrementProjetsPFENote +
      this.encadrementProjetsPFANote +
      this.memoiresFinEtudesMasterNote +
      this.encadrementStagesNote +
      this.encadrementRessourcesHumainesNote +
      this.gestionDepartementNote +
      this.responsableFiliereModuleNote +
      this.gestionFormationUniversitaireNote +
      this.enseignementMasterNote +
      this.membreConseilUniversiteNote +
      this.membreCommissionParitaireNote +
      this.membreConseilEtablissementNote +
      this.membreCommissionScientifiqueNote +
      this.membreCommissionReformeExpertisePedagogiqueNote +
      this.articlesScientifiquesCategorie1Note +
      this.articlesScientifiquesCategorie2Note +
      this.ouvragesRechercheScientifiquesNote +
      this.publicationsActesCongresNote +
      this.depotBrevetsRealisationPrototypesNote +
      this.encadrementCoencadrementThesesDoctoratNote +
      this.encadrementCoencadrementTravauxRechercheMasterNote +
      this.rapporteurMembreJuryNoteNote +
      this.laboratoireEquipeCedNote +
      this.polesCompetenceReseauxNote +
      this.cedDoctoratMasterNote +
      this.projetsContratsRechercheFinancesNote +
      this.activitesExpertiseEvaluationsScientifiquesNote +
      this.organisationManifestationsScientifiquesNote +
      this.organisationSeminaireNote;

    console.log(this.note);
  }

  ngOnInit(): void {}

  submit(validation: number) {
    // this.candidatureService.updateCandidature(this.candidature.id)
  }
}
