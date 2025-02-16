import {ColorValue} from 'react-native';
import {
  ModalEnum,
  PhaseSubmissionActionEnum,
  taskPhaseStatus,
} from '../../utils/enums';
import {accent, gray, grayLight, primary} from '../../constants/colors';
import {useState} from 'react';
import {ITask, IModalPhase} from '../../interfaces';

// Demo data
const demoTask: ITask = {
  id: 'a2a40445-d8ca-4aa5-30c5-08dd0f1c6c21',
  name: 'Demo Engine rebuild',
  progressToHundred: 0,
  organization: 'KIA LAZARUS',
  status: 0,
  description: 'On a VW GTI, 2016 year model.',
  eta: new Date(),
  color: '#FFAACC',
  phases: [
    {
      id: '24f1d6b0-c5f9-4a7f-9fd1-08dd0f1c6c61',
      name: 'Diagnostic',
      number: 1,
      description:
        "We will strip the engine to find all the parts we'll need to replace.",
      icon: 'settings-outline',
      status: 2,
    },
    {
      id: 'd87b3d38-be1e-4129-9fd2-08dd0f1c6c61',
      name: 'Quotation',
      number: 2,
      description:
        'We will send a quotation before we start ordering the parts.',
      icon: 'document-text-outline',
      status: 1,
    },
    {
      id: 'e45ed5f9-92d8-4f98-9fd3-08dd0f1c6c61',
      name: 'Awaiting parts',
      number: 3,
      description: 'This will take about 7 working days',
      icon: 'hourglass-outline',
      status: 0,
    },
    {
      id: '6882135c-7570-49aa-9fd4-08dd0f1c6c61',
      name: 'Rebuild process',
      number: 4,
      description: 'This will take about 2 weeks',
      icon: 'construct-outline',
      status: 0,
    },
    {
      id: 'a0852710-1dfa-40e4-9fd5-08dd0f1c6c61',
      name: 'Test',
      number: 5,
      description: 'We will test the car to ensure everything is working.',
      icon: '',
      status: 0,
    },
    {
      id: 'aac7109f-bfa7-4531-9fd6-08dd0f1c6c61',
      name: 'Ready',
      number: 6,
      description: 'Car is ready for collection',
      icon: 'call-outline',
      status: 0,
    },
  ],
  roles: [
    {
      id: '0ae35c90-1475-4003-71db-08dd0f1c6c83',
      roleType: 2,
      taskId: 'a2a40445-d8ca-4aa5-30c5-08dd0f1c6c21',
      profileId: '3689581c-01a6-4949-ed5f-08dcd5b3823b',
    },
  ],
  invitation: {
    id: 'ace0d015-47e3-4a42-bb19-08dd0f1c6c8d',
    phoneNumber: '0711111111',
    roleType: 1,
  },
};

// Inner interfaces
interface IModalVisibilities {
  showPhaseDetailsModal: boolean;
  showPhaseEditModal: boolean;
}

var initModalVisibilities: IModalVisibilities = {
  showPhaseDetailsModal: false,
  showPhaseEditModal: false,
};

// Global variables
var modalPhase: IModalPhase;
var phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Edit;

export const useEditorTask = (task: ITask) => {
  //#region Hooks
  const [modalVisibilities, setModalVisibilities] =
    useState<IModalVisibilities>(initModalVisibilities);
  //#endregion Hooks

  const getNumberOfCompletedPhases = () => {
    let currentIndexPhase = task.phases.findIndex(
      phase => phase.status === taskPhaseStatus.InProgress,
    );

    if (currentIndexPhase !== -1)
      return task.phases[--currentIndexPhase].number;

    // If all items are pending
    if (task.phases.every(phase => phase.status === taskPhaseStatus.Pending))
      return 0;

    // If all items are completed
    if (task.phases.every(phase => phase.status === taskPhaseStatus.Completed))
      return task.phases.length;

    return undefined;
  };

  const expandPhaseDetails = (details: IModalPhase) => {
    modalPhase = details;
    modalToDisplay(ModalEnum.ViewDetails);
  };

  const onEditClick = (
    name: string,
    number: number,
    description?: string,
    icon?: string,
  ) => {
    modalPhase = {name, description, icon, number};
    phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Edit;
    modalToDisplay(ModalEnum.Edit);
  };

  const onAddClick = (number: number) => {
    modalPhase = {number};
    phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Add;
    modalToDisplay(ModalEnum.Edit);
  };

  const onDelete = (phaseId: string) => {
    console.log('Deleting phase: ', phaseId);
  };

  const closeEditModal = () => {
    modalToDisplay(ModalEnum.None);
    modalPhase = {
      name: undefined,
      description: undefined,
      icon: undefined,
      number: 0,
    };
  };

  const editPhase = (editedPhase: IModalPhase) => {
    console.log('Editing with payload: ', JSON.stringify(editedPhase));
    // TODO::: edit api here
    closeEditModal(); // TODO::: added for testing
  };

  const savePhase = (newPhase: IModalPhase) => {
    console.log('Saving with payload: ', newPhase);
    // TODO::: save api here
    closeEditModal(); // TODO::: added for testing
  };

  const updatePhaseStatus = (id: string) => {
    console.log('Phase status update with id: ', id);
    let phaseToUpdateStatus = task.phases.find(p => p.id === id);
    if (phaseToUpdateStatus) {
      // TODO::: execute api to update phase status to in-progress
    }
  };

  const phaseModalSaveAction = (p: IModalPhase) => {
    if (phaseModalPositiveButtonToPerform === PhaseSubmissionActionEnum.Edit)
      editPhase(p);
    else return savePhase(p);
  };

  const modalToDisplay = (modalToDisplay: ModalEnum) => {
    switch (modalToDisplay) {
      case ModalEnum.ViewDetails:
        setModalVisibilities({
          showPhaseEditModal: false,
          showPhaseDetailsModal: true,
        });
        break;
      case ModalEnum.Edit:
        setModalVisibilities({
          showPhaseDetailsModal: false,
          showPhaseEditModal: true,
        });
        break;
      case ModalEnum.None:
        setModalVisibilities({
          showPhaseDetailsModal: false,
          showPhaseEditModal: false,
        });
        break;
      default:
        setModalVisibilities({
          showPhaseDetailsModal: false,
          showPhaseEditModal: false,
        });
    }
  };

  return {
    taskData: task,
    modalPhase,
    modalVisibilities,
    phaseModalPositiveButtonToPerform,
    updatePhaseStatus,
    onEditClick,
    onDelete,
    closeEditModal,
    expandPhaseDetails,
    modalToDisplay,
    getNumberOfCompletedPhases,
    onAddClick,
    phaseModalSaveAction,
  };
};

export const useRow = (
  description?: string,
  number?: number,
  dataLength?: number,
  status: taskPhaseStatus = taskPhaseStatus.Completed,
) => {
  let taskPhaseDetailsHeight = 76;
  if (!description) taskPhaseDetailsHeight = 40;

  // taskNumberBadge
  let taskNumberBadgeStyleOverride;
  let taskNumberBadgeNumberStyleOverride;

  // taskPhaseDetails
  let taskPhaseDetailsStyleOverride;
  let taskPhaseDetailsTextStyleOverride;

  // taskTrackLine
  let taskTrackLineStyleOverride;

  // taskIcon
  let taskIconStyleOverride;

  if (status === taskPhaseStatus.InProgress) {
    taskNumberBadgeStyleOverride = {
      backgroundColor: grayLight,
      borderWidth: 3,
      borderColor: primary,
    };
    taskTrackLineStyleOverride = {backgroundColor: grayLight};
    taskNumberBadgeNumberStyleOverride = {color: primary};
  } else if (status === taskPhaseStatus.Pending) {
    taskNumberBadgeStyleOverride = {backgroundColor: grayLight};
    taskNumberBadgeNumberStyleOverride = {color: accent};
    taskTrackLineStyleOverride = {backgroundColor: grayLight};
    taskPhaseDetailsStyleOverride = {
      borderColor: grayLight,
    };
    taskPhaseDetailsTextStyleOverride = {color: gray};
    taskIconStyleOverride = {color: grayLight};
  }

  if (number === dataLength)
    taskTrackLineStyleOverride = {height: 23, backgroundColor: 'transparent'};

  return {
    taskNumberBadgeStyleOverride,
    taskNumberBadgeNumberStyleOverride,
    taskPhaseDetailsHeight,
    taskPhaseDetailsStyleOverride,
    taskPhaseDetailsTextStyleOverride,
    taskTrackLineStyleOverride,
    taskIconStyleOverride,
  };
};
