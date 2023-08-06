import {ColorValue} from 'react-native';
import {taskStatus, taskPhaseStatus} from '../utils/enums';

export interface ITask {
  id: string;
  creatorId: string; // fk
  name: string;
  clientPhoneNumber: string;
  clientFirstName?: string; // fk
  clientLastName?: string; // fk
  color: ColorValue;
  progressToHundred: number;
  organization: string;
  reference: string;
  status: taskStatus;
  description: string;
  phases: ITaskPhase[];
  eta: Date;
}

export interface ITaskPhase {
  id: string;
  taskId: string; // fk
  name: string;
  description: string;
  icon: string;
  number: number;
  status: taskPhaseStatus;
}
