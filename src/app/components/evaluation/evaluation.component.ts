import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Candidature } from '../../interfaces/candidature';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  candidature: Candidature = JSON.parse(`
  {"donneesPersonnelles":{"nom":"Chaoui","prenom":"Habiba","departement":"Infromatique et math","dateRecrutement":"2021-06-16T23:00:00.000Z","grade":{"name":"B"},"telephone":"0655796476","fax":"0733445763","email":"chaoui@hotmail.com"},"passageCadreGrade":{"typePassage":"E","cadreGrade":"[PA] Grade A à grade B"},"activitesPedagogiques":{"productionPedagogique":{"ouvragesManuels":[{"fileName":"8ebab18b-9fdf-4e53-9e6e-1eb436de4a19.pdf","documentName":"TD BDREPRTIE 2018"}],"polycopiesEnseignement":[{"fileName":"2d77bab2-5c2b-4d03-b39d-246e8d37a508.pdf","documentName":"Cours tres avance"},{"fileName":"61855543-c367-4c14-8fb2-1792236383db.pdf","documentName":"Cours Spec Toleka v4"}],"supportsProcedesDidactiques":[]},"encadrementPedagogique":{"encadrementProjetsPFE":[{"fileName":"d578dd86-c3f0-433f-9491-0c4e3aeff7ef.pdf","documentName":"Seance2 Bases de données réparties habiba 2017 2018"}],"encadrementProjetsPFA":[],"memoiresFinEtudesMaster":[{"fileName":"fe9ce4f1-7d34-47ff-a8da-39f9aca2f656.pdf","documentName":"Interesting course"}],"encadrementStages":[],"encadrementRessourcesHumaines":[{"fileName":"9e2f5ffa-c8b3-4e4b-95cf-2b2a32c61244.pdf","documentName":"Cours de souwa"}]},"responsabilitesPedagogiquesAdministratives":{"gestionDepartement":[],"responsableFiliereModule":[],"gestionFormationUniversitaire":[],"enseignementMaster":[],"membreConseilUniversite":[],"membreCommissionParitaire":[],"membreConseilEtablissement":[],"membreCommissionScientifique":[],"membreCommissionReformeExpertisePedagogique":[]}},"activitesRecherche":{"productionScientifique":{"articlesScientifiquesCategorie1":[],"articlesScientifiquesCategorie2":[],"ouvragesRechercheScientifiques":[],"publicationsActesCongres":[], "depotBrevetsRealisationPrototypes":[]},"encadrementScientifique":{"encadrementCoencadrementThesesDoctorat":[],"encadrementCoencadrementTravauxRechercheMaster":[],"rapporteurMembreJuryNote":[{"fileName":"432ffc1a-0623-4b0e-9a16-a418c182dc31.pdf","documentName":"BDD Reparties"},{"fileName":"1d64a1ce-2893-4d48-873f-5ca8948dbcfd.pdf","documentName":"Zinger nigger course 2016"}]},"responsabilitesScientifiques":{"laboratoireEquipeCed":[],"polesCompetenceReseaux":[],"cedDoctoratMaster":[],"projetsContratsRechercheFinances":[],"activitesExpertiseEvaluationsScientifiques":[],"organisationManifestationsScientifiques":[],"organisationSeminaire":[]}}}
  `);

  note = 0;

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

  constructor() {}

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
}
