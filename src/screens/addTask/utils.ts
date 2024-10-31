import {useState} from 'react';
import {ITask} from '../../interfaces';
import {TaskFormFieldEnum, taskStatus} from '../../utils/enums';

const taskInit: ITask = {
  name: '',
  clientPhoneNumber: '',
  phases: [],
  status: taskStatus.Pending,
};

export const useAddTask = () => {
  // Hooks
  const [showTasPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showPickerPopup, setShowPickerPopup] = useState(false);
  const [iconName, setIconName] = useState<string>('');

  // Methods
  const validateTaskDetails = () => {
    if (!task.name && !task.clientPhoneNumber) {
      console.log('Please fill in the task details');
    } else if (!task.name) {
      console.log('Please fill in the task name');
    } else if (!task.clientPhoneNumber) {
      console.log('Please fill in the client phone number');
    } else {
      setShowTaskPhaseContainer(true);
    }
  };
  console.log('task::', task);

  const updateTaskFormDetails = (value: string, field: TaskFormFieldEnum) => {
    switch (field) {
      case TaskFormFieldEnum.name:
        setTask({...task, name: value});
        break;
      case TaskFormFieldEnum.phoneNumber:
        setTask({...task, clientPhoneNumber: value});
        break;
      case TaskFormFieldEnum.description:
        setTask({...task, description: value});
        break;
      default:
        setTask(task);
    }
  };

  const showTaskForm = (value: boolean) => {
    setName('');
    setDescription('');
    setShowTaskPhaseContainer(value);
  };

  const displayPreviousPhase = () => {
    let poppedPhase = task.phases.pop();

    if (poppedPhase) {
      setName(poppedPhase.name);
      setDescription(poppedPhase.description ?? '');
    }
  };

  const addPhase = () => {
    if (!name && !description) {
    } else if (!name) {
    } else if (!description) {
    } else {
      let taskNumber = task.phases.length + 1;
      let taskPhase = task.phases;

      taskPhase.push({
        name,
        description,
        status: taskPhaseStatus.Pending,
        number: taskNumber,
        icon: iconName,
      });

      setTask({
        ...task,
        phases: taskPhase,
      });
      setName('');
      setDescription('');
      setIconName('');
    }
  };

  const setSelectIcon = (name: string) => {
    setIconName(name);
    setShowPickerPopup(false);
  };

  return {
    showTasPhaseContainer,
    name,
    description,
    iconName,
    task,
    showPickerPopup,
    setName,
    setDescription,
    addPhase,
    setShowPickerPopup,
    showTaskForm,
    displayPreviousPhase,
    updateTaskFormDetails,
    validateTaskDetails,
    setSelectIcon,
  };
};
