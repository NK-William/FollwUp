import {TaskFormFieldEnum} from '../../utils/enums';

export interface IAddTaskDetailsProps {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  description?: string;
  organization?: string;
  eta?: Date;
  updateTaskFormDetails: (
    value: string | Date,
    field: TaskFormFieldEnum,
  ) => void;
  updateShowTaskPhaseContainer: () => void;
  navigation: any;
}
