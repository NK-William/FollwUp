import {ITask, ITaskPhase} from './interfaces';
import {taskStatus, taskPhaseStatus} from './utils/enums';

export const fakeTasks: ITask[] = [
  {
    clientFirstName: 'William',
    clientLastName: 'Nkuna',
    name: 'Engine rebuild',
    color: 'green',
    progressToHundred: 100,
    organization: 'KIA Lazarus',
    clientPhoneNumber: '0712345678',
    creatorId: 'hgdt6376v3r3g363',
    description:
      'Engine rebuild on 2012 KIA Cerato Koup License number GF DJ 65 GP',
    eta: new Date(),
    phases: [
      {
        id: '1',
        name: 'Diagnostic',
        description: 'We will be diagnosing your car today',
        number: 1,
        icon: '',
        status: taskPhaseStatus.Completed,
        taskId: '1',
      },

      {
        id: '2',
        name: 'Parts ordering',
        description: 'Task list items',
        number: 2,
        icon: '',
        status: taskPhaseStatus.Completed,
        taskId: '1',
      },
      {
        id: '3',
        name: 'Repairing',
        description: 'Repair',
        number: 3,
        icon: '',
        status: taskPhaseStatus.Completed,
        taskId: '1',
      },
      {
        id: '4',
        name: 'Testing',
        description:
          'We will be running tests to make sure everything is running smooth',
        number: 4,
        icon: '',
        status: taskPhaseStatus.InProgress,
        taskId: '1',
      },
      {
        id: '5',
        name: 'Completed',
        description: 'Your car is ready for collection.',
        number: 5,
        icon: '',
        status: taskPhaseStatus.Pending,
        taskId: '1',
      },
    ],
    reference: '123wffdsw',
    status: taskStatus.Rejected,
    id: '1',
  },
  {
    clientFirstName: 'Effy',
    clientLastName: 'Fredy',
    name: 'Radiator replacement',
    color: 'orange',
    progressToHundred: 90,
    organization: 'Cylinder head service',
    clientPhoneNumber: '0712345678',
    creatorId: 'hgdt6376v3r3g363',
    description:
      'Engine rebuild on 2012 KIA Cerato Koup License number GF DJ 65 GP',
    eta: new Date(),
    phases: [],
    reference: '123wffdsw',
    status: taskStatus.Pending,
    id: '2',
  },
  {
    name: 'Engine rebuild',
    color: 'purple',
    progressToHundred: 83,
    organization: 'KIA Lazarus',
    clientPhoneNumber: '0712345678',
    creatorId: 'hgdt6376v3r3g363',
    description:
      'Engine rebuild on 2012 KIA Cerato Koup License number GF DJ 65 GP',
    eta: new Date(),
    phases: [],
    reference: '123wffdsw',
    status: taskStatus.Pending,
    id: '3',
  },
  {
    clientFirstName: 'Karabo',
    clientLastName: 'Jerry',
    name: 'Turbo installation',
    color: 'red',
    progressToHundred: 50,
    organization: 'KIA Lazarus',
    clientPhoneNumber: '0712345678',
    creatorId: 'hgdt6376v3r3g363',
    description:
      'Engine rebuild on 2012 KIA Cerato Koup License number GF DJ 65 GP',
    eta: new Date(),
    phases: [],
    reference: '123wffdsw',
    status: taskStatus.Accepted,
    id: '4',
  },
  {
    clientFirstName: 'Thabo',
    clientLastName: 'Maleka',
    name: 'light switch replacement',
    color: 'blue',
    progressToHundred: 21,
    organization: 'KIA Lazarus',
    clientPhoneNumber: '0712345678',
    creatorId: 'hgdt6376v3r3g363',
    description:
      'Engine rebuild on 2012 KIA Cerato Koup License number GF DJ 65 GP',
    eta: new Date(),
    phases: [],
    reference: '123wffdsw',
    status: taskStatus.Completed,
    id: '5',
  },
  {
    clientFirstName: 'Kamo',
    clientLastName: 'Nkuna',
    name: 'Oil change',
    color: 'gray',
    progressToHundred: 18,
    organization: 'KIA Lazarus',
    clientPhoneNumber: '0712345678',
    creatorId: 'hgdt6376v3r3g363',
    description:
      'Engine rebuild on 2012 KIA Cerato Koup License number GF DJ 65 GP',
    eta: new Date(),
    phases: [],
    reference: '123wffdsw',
    status: taskStatus.Accepted,
    id: '6',
  },
  {
    clientFirstName: 'Chris',
    clientLastName: 'Maleka',
    name: 'Radiator flush',
    color: 'brown',
    progressToHundred: 8,
    organization: 'KIA Lazarus',
    clientPhoneNumber: '0712345678',
    creatorId: 'hgdt6376v3r3g363',
    description:
      'Engine rebuild on 2012 KIA Cerato Koup License number GF DJ 65 GP',
    eta: new Date(),
    phases: [],
    reference: '123wffdsw',
    status: taskStatus.Completed,
    id: '7',
  },
];
