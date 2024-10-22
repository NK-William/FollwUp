import {useState} from 'react';
import {ITaskListItemProps} from './interface';
import {taskStatus, TaskStatusColor} from '../../utils/enums';

export const useTaskListItem = (props: ITaskListItemProps) => {
  const getStatusViewColor = () => {
    switch (props.status) {
      case taskStatus.Rejected:
        return TaskStatusColor.Rejected;
      case taskStatus.Accepted:
        return TaskStatusColor.Accepted;
      case taskStatus.Completed:
        return TaskStatusColor.Completed;
      case taskStatus.Pending:
        return TaskStatusColor.Pending;
      default:
        return TaskStatusColor.Pending;
    }
  };

  const getStatusText = () => {
    switch (props.status) {
      case taskStatus.Rejected:
        return 'Rejected';
      case taskStatus.Accepted:
        return 'Accepted';
      case taskStatus.Completed:
        return 'Completed';
      case taskStatus.Pending:
        return 'Pending';
      default:
        return 'N/A';
    }
  };

  // TODO: should return names, add props from the back-end
  const getFirstLastName = () => {
    if (props.clientFirstName && props.clientLastName)
      return `${props.clientFirstName} ${props.clientLastName}`;
    // else return 'Client is not registered';
    else return '';
  };

  const showInviteLink = () => {
    if (!props.isTracker || (props.clientFirstName && props.clientLastName))
      return false;
    else return true;
  };

  let namesOrOrganization = '';

  const statusViewColor = getStatusViewColor();
  const statusText = getStatusText();
  if (props.isTracker) namesOrOrganization = getFirstLastName();
  else namesOrOrganization = props.organization;
  const inviteLinkVisible = showInviteLink();
  return {
    statusViewColor,
    statusText,
    namesOrOrganization,
    inviteLinkVisible,
  };
};
