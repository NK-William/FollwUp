import {taskPhaseStatus} from '../utils/enums';

export interface IPhase {
  id: string;
  taskId?: string; // fk
  name: string;
  description?: string;
  icon?: string;
  number: number;
  status: taskPhaseStatus;
}
