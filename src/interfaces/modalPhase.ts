import {PhaseSubmissionActionEnum, taskPhaseStatus} from '../utils/enums';

export interface IModalPhase {
  id?: string;
  name?: string;
  description?: string;
  icon?: string;
  number?: number;
  status?: taskPhaseStatus;
}
