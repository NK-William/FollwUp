import {useState} from 'react';
import {IPhase, ITask} from '../../interfaces';
import {
  roleType,
  TaskFormFieldEnum,
  taskPhaseStatus,
  taskStatus,
} from '../../utils/enums';
import {Alert} from 'react-native';
import {useMutate} from 'restful-react';
import {resetToScreen} from '../../utils';
import {selectUser} from '../../redux/features/user/userSlice';
import {useSelector} from 'react-redux';
import {editorTask, home} from '../../constants/pageNames';

const taskInit: ITask = {
  name: '',
  phases: [],
  status: taskStatus.Pending,
};

export const useAddTask = (navigation: any) => {
  //#region  Hooks
  const [showTaskPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [icon, setIcon] = useState<string>('');
  const {id: profileId} = useSelector(selectUser);
  //#endregion Hooks

  //#region API requests
  const {mutate: apiSaveTask, loading: isSavingTask} = useMutate<ITask>({
    verb: 'POST',
    path: 'api/Tasks',
  });

  //#region  Methods
  const validateTaskForm = () => {
    if (!task.name) {
      displayAlert('Please enter task name before going to the next step.');
    } else {
      setShowTaskPhaseContainer(true);
    }
  };

  const updateTaskFormDetails = (value: string, field: TaskFormFieldEnum) => {
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
    setIcon('');
    setShowTaskPhaseContainer(value);
  };

  const displayPreviousPhase = () => {
    let poppedPhase = task.phases.pop();

    if (poppedPhase) {
      setName(poppedPhase.name);
      setDescription(poppedPhase.description ?? '');
      setIcon(poppedPhase.icon ?? '');
    }
  };

  const openNextPhaseForm = () => {
    if (
      validateTaskPhaseForm(
        'Please fill all fields before going to the next step.',
        'Please fill name before going to the next step.',
        'Please fill description before going to the next step.', // TODO::: Confirm if I need to remove this and make description optional
      )
    ) {
      const taskPhases = pushNewPhase();

      setTask({
        ...task,
        phases: taskPhases,
      });

      clearPhaseForm();
    }
  };

  const validateTaskPhaseForm = (
    allFieldsMessage: string,
    nameFieldMessage: string,
    descriptionFieldMessage: string,
  ) => {
    let isValid = false;
    if (!name && !description) {
      displayAlert(allFieldsMessage);
    } else if (!name) {
      displayAlert(nameFieldMessage);
    } else if (!description) {
      displayAlert(descriptionFieldMessage);
    } else {
      isValid = true;
    }

    return isValid;
  };

  const pushNewPhase = () => {
    let phases: IPhase[] = Array.from(task.phases);
    let taskNumber = phases.length + 1;

    phases.push({
      name,
      description,
      status: taskPhaseStatus.Pending,
      number: taskNumber,
      icon,
    });

    return phases;
  };

  const clearPhaseForm = () => {
    setName('');
    setDescription('');
    setIcon('');
  };

  const displayAlert = (message: string, title = 'Alert') => {
    Alert.alert(title, message);
  };

  const resetNavigation = (routes: {name: string; params?: object}[]) => {
    resetToScreen(navigation, routes);
  };

  const saveTask = () => {
    if (
      validateTaskPhaseForm(
        'Please fill all fields before submitting task.',
        'Please enter name before submitting task.',
        'Please enter description before submitting task.',
      )
    ) {
      const taskPhases = pushNewPhase();

      const taskForm: ITask = {
        ...task,
        phases: taskPhases,
      };

      if (!profileId)
        console.log(
          "Re-fetch profile info and get the id because user can't submit without a profile id",
        );

      taskForm.profileId = profileId;
      taskForm.organization = 'KIA LAZARUS'; // TODO: This has to be retrieved from profile (add prop to profile)
      taskForm.color = '#FFAACC'; // TODO: auto generate
      taskForm.eta = '2024-12-17T16:01:16.416Z'; // TODO: add the field

      // TODO: not used with the current version
      taskForm.invitation = {
        phoneNumber: '0711111111', // TODO: Not needed in the current version
        roleType: roleType.Tracker, // TODO remove this, back-end is handling it
        task: {
          // TODO: Code1(When everything is complete) this has to be removed
          name: taskForm.name,
          progressToHundred: 0,
          organization: taskForm.organization,
          status: 0,
          description: taskForm.description,
          color: taskForm.color,
          eta: taskForm.eta,
        },
      };

      // console.log('saving task: ', JSON.stringify(taskForm));

      apiSaveTask(taskForm)
        .then(async response => {
          if (response) {
            console.log('Successfully submitted: ', JSON.stringify(taskForm));
            resetNavigation([
              {name: home},
              {name: editorTask, params: response},
            ]);
          } else {
            console.log('Got undefined response');
          }
        })
        .catch(error => {
          if (error?.status === 404) {
            // TODO: push to stack trace
            console.log('Not found');
          } else {
            // TODO: push to stack trace
            console.log('Error: ', error.data ?? error.message);
          }
        });
    }
  };

  //#endregion Methods

  return {
    showTaskPhaseContainer,
    name,
    description,
    task,
    isSavingTask,
    icon,
    setName,
    setDescription,
    setIcon,
    openNextPhaseForm,
    showTaskForm,
    displayPreviousPhase,
    updateTaskFormDetails,
    validateTaskForm,
    saveTask,
    resetNavigation,
  };
};
