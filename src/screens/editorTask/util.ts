import {ColorValue} from 'react-native';
import {taskPhaseStatus} from '../../utils/enums';
import {accent, gray, grayLight, primary} from '../../constants/colors';
import {useState} from 'react';
import {ITask} from '../../interfaces';

export const useEditorTask = (task: ITask) => {
  const [showModal, setShowModal] = useState(false);

  const modalVisible = (value: boolean) => {
    setShowModal(value);
  };

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

  return {showModal, modalVisible, getNumberOfCompletedPhases};
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
