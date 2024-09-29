import {ColorValue} from 'react-native';
import {taskStatus, taskPhaseStatus} from '../utils/enums';

export interface ITask {
  // Create a file for this interface
  id?: string;
  creatorId?: string; // fk
  name: string;
  clientPhoneNumber: string;
  clientFirstName?: string; // fk
  clientLastName?: string; // fk
  color?: ColorValue;
  progressToHundred?: number;
  organization?: string;
  reference?: string;
  status: taskStatus;
  description?: string;
  phases: ITaskPhase[];
  eta?: Date;
}

export interface ITaskPhase {
  // Create a file for this interface
  id: string;
  taskId?: string; // fk
  name: string;
  description?: string;
  icon?: string;
  number: number;
  status: taskPhaseStatus;
}

export type {ILogin} from './login';
export type {IReduxUser} from './reduxUser';
export type {IRegister} from './register';
export type {IProfile} from './profile';
