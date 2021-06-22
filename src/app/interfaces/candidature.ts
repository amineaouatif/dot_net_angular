export interface Candidature {
  donneesPersonnelles: {
    nom: string;
    prenom: string;
    departement: string;
    dateRecrutement: string;
    grade: { name: string };
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
      gestionFormationUniversitaire: Array<JustificatifLight>;
      enseignementMaster: Array<JustificatifLight>;
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
      depotBrevetsRealisationPrototypes: Array<JustificatifLight>;
    };
    encadrementScientifique: {
      encadrementCoencadrementThesesDoctorat: Array<JustificatifLight>;
      encadrementCoencadrementTravauxRechercheMaster: Array<JustificatifLight>;
      rapporteurMembreJuryNote: Array<JustificatifLight>;
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

export interface JustificatifLight {
  fileName: string;
  documentName: string;
}
