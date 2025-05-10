import {PhaseSubmissionActionEnum, taskPhaseStatus} from '../utils/enums';
import {IIconNameType} from './iconNameType';

export interface IModalPhase {
  id?: string;
  name?: string;
  description?: string;
  icon?: IIconNameType;
  // iconName?: string;
  // iconType?: string;
  number?: number;
  status?: taskPhaseStatus;
}
