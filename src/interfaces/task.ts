import {taskStatus} from '../utils/enums';
import {IInvitation, IPhase, IRole} from '.';

export interface ITask {
  id?: string;
  name: string;
  progressToHundred?: number;
  organization?: string;
  status: taskStatus;
  description?: string;
  eta?: string;
  color?: string;
  phases: IPhase[];
  roles?: IRole[];
  invitation?: IInvitation;
}
