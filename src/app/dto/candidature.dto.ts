import { Candidature } from '../interfaces/candidature';

export interface CandidatureDto {
  id: number;
  jsonContent: string;
  candidateLastName: string;
  candidateFirstName: string;
  refrenceToken: string;
  createdDate: string;
}
