import {TaskFormFieldEnum} from '../../utils/enums';

export interface IAddTaskDetailsProps {
  name?: string;
  phoneNumber?: string;
  description?: string;
  updateTaskFormDetails: (value: string, field: TaskFormFieldEnum) => void;
}
