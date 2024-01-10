import {ITask} from '../../interfaces';

export interface IAddTaskDetailsProps {
  task?: ITask;
  updateTask?: (values: ITask) => void;
}
