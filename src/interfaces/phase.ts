import {taskPhaseStatus} from '../utils/enums';
import {IIconNameType} from './iconNameType';

export interface IPhase {
  id?: string;
  // taskId?: string; // fk
  name: string;
  description?: string;
  icon?: IIconNameType;
  number: number;
  status: taskPhaseStatus;
}
