import {roleType} from '../utils/enums';

export interface IInvitation {
  id?: string;
  phoneNumber: string;
  roleType: roleType;
  // taskId?: string;
  task?: iTask; // Fix loop reference with ITask
}

// fix this on both back-end and here
interface iTask {
  name: string;
  progressToHundred?: number;
  organization?: string;
  status: number;
  description?: string;
  eta?: string;
  color?: string;
}
