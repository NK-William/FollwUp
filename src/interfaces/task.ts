import {taskStatus} from '../utils/enums';
import {IInvitation, IPhase, IRole} from '.';

export interface ITask {
  id?: string;
  name: string;
  progressToHundred?: number;
  organization: string;
  status: taskStatus;
  description?: string;
  eta: Date;
  color?: string;
  phases: IPhase[];
  roles?: IRole[];
  invitation?: IInvitation;
  profileId?: string;
  clientFirstName?: string;
  clientLastName?: string;
  clientEmail?: string;
  clientPhone?: string;
}

//
// {
//   "name": "Test task 1",
//   "progressToHundred": 0,
//   "organization": "Org test",
//   "status": 0,
//   "description": "Task descr",
//   "eta": "2024-11-23T19:44:53.936Z",
//   "color": "#FFAACC",
//   "profileId": "3689581c-01a6-4949-ed5f-08dcd5b3823b",
//   "phases": [
//     {
//       "name": "Phase 1",
//       "number": 1,
//       "description": "Phase descr",
//       "icon": "fix",
//       "status": 0
//     }
//   ],
//   "invitation": { ??
//     "phoneNumber": "0711111111",
//     "roleType": 0,
//     "task": {
//       "name": "Test task 1",
//   "progressToHundred": 0,
//   "organization": "Org test",
//   "status": 0,
//   "description": "Task descr",
//   "eta": "2024-11-23T19:44:53.936Z",
//   "color": "#FFAACC"
//     }
//   }
// }
