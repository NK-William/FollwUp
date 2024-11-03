import {useState} from 'react';
import {ITask} from '../../interfaces';
import {
  TaskFormFieldEnum,
  taskPhaseStatus,
  taskStatus,
} from '../../utils/enums';
import {Alert} from 'react-native';

const taskInit: ITask = {
  name: '',
  phases: [],
  status: taskStatus.Pending,
};

export const useAddTask = () => {
  // Hooks
  const [showTaskPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showPickerPopup, setShowPickerPopup] = useState(false);
  const [iconName, setIconName] = useState<string>('');

  // Methods
  const validateTaskDetails = () => {
    if (!task.name) {
      Alert.alert(
        'Alert',
        'Please fill in task name before getting to the next step.',
      );
    } else {
      setShowTaskPhaseContainer(true);
    }
  };
  console.log('task::', task);

  const updateTaskFormDetails = (value: string, field: TaskFormFieldEnum) => {
    console.log('filed: ', field);
    switch (field) {
      case TaskFormFieldEnum.name:
        setTask({...task, name: value});
        break;
      // case TaskFormFieldEnum.phoneNumber:
      //   setTask({...task, clientPhoneNumber: value});
      //   break;
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
    showTaskPhaseContainer,
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
