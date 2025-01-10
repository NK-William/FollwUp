import {ColorValue} from 'react-native';
import {
  ModalEnum,
  PhaseSubmissionActionEnum,
  taskPhaseStatus,
} from '../../utils/enums';
import {accent, gray, grayLight, primary} from '../../constants/colors';
import {useState} from 'react';
import {ITask, IModalPhase} from '../../interfaces';

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

  const onEditClick = (name: string, description?: string, icon?: string) => {
    modalPhase = {name, description, icon};
    phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Edit;
    modalToDisplay(ModalEnum.Edit);
  };

  const onAddClick = () => {
    phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Add;
    modalToDisplay(ModalEnum.Edit);
  };

  const onDelete = (phaseId: string) => {
    console.log('Deleting phase: ', phaseId);
  };

  const closeEditModal = () => {
    modalToDisplay(ModalEnum.None);
    modalPhase = {name: undefined, description: undefined, icon: undefined};
  };

  const editPhase = (editedPhase: IModalPhase) => {
    console.log('Editing with payload: ', JSON.stringify(editedPhase));
    closeEditModal(); // TODO::: added for testing
  };

  const savePhase = (newPhase: IModalPhase) => {
    console.log('Saving with payload: ', newPhase);
    closeEditModal(); // TODO::: added for testing
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
    modalPhase,
    modalVisibilities,
    phaseModalPositiveButtonToPerform,
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
