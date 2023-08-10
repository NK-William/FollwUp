import {ITaskListItemProps} from './interface';
import {taskStatus, TaskStatusColor} from '../../utils/enums';

export const useTaskListItem = (props: ITaskListItemProps) => {
  console.log('props status', props.status);
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

  const getFirstLastName = () => {
    if (props.clientFirstName && props.clientLastName)
      return `${props.clientFirstName} ${props.clientLastName}`;
    else return 'Client is not registered';
  };

  const showInviteLink = () => {
    if (props.clientFirstName && props.clientLastName) return false;
    else return true;
  };

  const statusViewColor = getStatusViewColor();
  const statusText = getStatusText();
  const names = getFirstLastName();
  const inviteLinkVisible = showInviteLink();
  return {statusViewColor, statusText, names, inviteLinkVisible};
};
