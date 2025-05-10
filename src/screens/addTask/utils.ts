import {useState} from 'react';
import {IIconNameType, IPhase, ITask} from '../../interfaces';
import {
  TaskFormFieldEnum,
  taskPhaseStatus,
  taskStatus,
} from '../../utils/enums';
import {Alert} from 'react-native';
import {useMutate} from 'restful-react';
import {
  isDateNotPast,
  isEmailValid,
  isPhoneNumberValid,
  resetToScreen,
} from '../../utils';
import {selectUser} from '../../redux/features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {editorTask, home} from '../../constants/pageNames';
import Toast from 'react-native-toast-message';
// import {setRefetchTasksOnNavBack} from '../../redux/features/refetchTasksOnNavBack/refetchTasksOnNavBackSlice'; // code 1

const taskInit: ITask = {
  name: '',
  phases: [],
  status: taskStatus.Pending,
  organization: '',
  eta: new Date(),
};

export const useAddTask = (navigation: any) => {
  //#region  Hooks
  const [showTaskPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [icon, setIcon] = useState<IIconNameType | undefined>(undefined);
  const {id: profileId} = useSelector(selectUser);
  // const dispatch = useDispatch(); // code 1
  //#endregion Hooks

  //#region API requests
  const {mutate: apiSaveTask, loading: isSavingTask} = useMutate<ITask>({
    verb: 'POST',
    path: 'api/Tasks',
  });

  //#region  Methods
  const validateTaskForm = () => {
    const {
      name,
      clientFirstName,
      clientLastName,
      clientEmail,
      clientPhone,
      organization,
      eta,
    } = task;

    if (
      !name &&
      !clientFirstName &&
      !clientLastName &&
      !clientEmail &&
      !clientPhone &&
      !organization
    ) {
      displayAlert(
        'Please fill all required fields before going to the next step.',
      );
    } else if (!name) {
      displayAlert('Please enter task name before going to the next step.');
    } else if (!clientFirstName) {
      displayAlert(
        'Please enter client first name before going to the next step.',
      );
    } else if (!clientLastName) {
      displayAlert(
        'Please enter client last name before going to the next step.',
      );
    } else if (!clientEmail) {
      displayAlert(
        'Please enter client email address before going to the next step.',
      );
    } else if (!isEmailValid(clientEmail)) {
      displayAlert('Please enter a valid email address.');
    } else if (!clientPhone) {
      displayAlert(
        'Please enter client phone number before going to the next step.',
      );
    } else if (!isPhoneNumberValid(clientPhone)) {
      displayAlert('Please enter a valid phone number.');
    } else if (!organization) {
      displayAlert('Please enter organization before going to the next step.');
    } else if (!isDateNotPast(eta)) {
      displayAlert('Date cannot be in the past.');
    } else {
      setShowTaskPhaseContainer(true);
    }
  };

  const updateTaskFormDetails = (
    value: string | Date,
    field: TaskFormFieldEnum,
  ) => {
    switch (field) {
      case TaskFormFieldEnum.name:
        setTask({...task, name: value as string});
        break;
      case TaskFormFieldEnum.clientFirstName:
        setTask({...task, clientFirstName: value as string});
        break;
      case TaskFormFieldEnum.clientLastName:
        setTask({...task, clientLastName: value as string});
        break;
      case TaskFormFieldEnum.ClientEmailAddress:
        setTask({...task, clientEmail: value as string});
        break;
      case TaskFormFieldEnum.ClientPhoneNumber:
        setTask({...task, clientPhone: value as string});
        break;
      case TaskFormFieldEnum.description:
        setTask({...task, description: value as string});
        break;
      case TaskFormFieldEnum.organization:
        setTask({...task, organization: value as string});
        break;
      case TaskFormFieldEnum.eta:
        setTask({...task, eta: value as Date});
        break;
      default:
        setTask(task);
    }
  };

  const showTaskForm = (value: boolean) => {
    setName('');
    setDescription('');
    setIcon(undefined);
    setShowTaskPhaseContainer(value);
  };

  const displayPreviousPhase = () => {
    let poppedPhase = task.phases.pop();

    if (poppedPhase) {
      setName(poppedPhase.name);
      setDescription(poppedPhase.description ?? '');
      setIcon(poppedPhase.icon ?? undefined);
    }
  };

  const openNextPhaseForm = () => {
    if (
      validateTaskPhaseForm('Please fill name before adding another phase.')
    ) {
      const taskPhases = pushNewPhase();

      setTask({
        ...task,
        phases: taskPhases,
      });

      clearPhaseForm();
    }
  };

  const validateTaskPhaseForm = (nameFieldMessage: string) => {
    let isValid = false;
    if (!name) {
      displayAlert(nameFieldMessage);
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
    setIcon(undefined);
  };

  const displayAlert = (message: string, title = 'Alert') => {
    Alert.alert(title, message);
  };

  const resetNavigation = (routes: {name: string; params?: object}[]) => {
    resetToScreen(navigation, routes);
  };

  const saveTask = () => {
    if (validateTaskPhaseForm('Please enter name before submitting task.')) {
      const taskPhases = pushNewPhase();

      const taskForm: ITask = {
        ...task,
        phases: taskPhases,
      };

      if (!profileId)
        displayAlert('Re-authenticate and try again', 'Failed to save'); // "Re-fetch profile info and get the id because user can't submit without a profile id",

      taskForm.profileId = profileId;
      // taskForm.organization = 'KIA LAZARUS'; // TODO: This has to be retrieved from profile (add prop to profile)
      taskForm.color = getRandomHexColor();

      // TODO: not used with the current version
      taskForm.invitation = {
        phoneNumber: taskForm.clientPhone as string, // TODO: Not needed in the current version
        task: {
          // TODO: Code1 = (When everything is complete) this has to be removed
          ...taskForm,
        },
      };

      console.log('Saving task form', JSON.stringify(taskForm));

      apiSaveTask(taskForm)
        .then(async response => {
          if (response) {
            // dispatch(setRefetchTasksOnNavBack(true)); // code 1
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: 'Task is created successfully',
            });
            resetNavigation([
              {name: home},
              {name: editorTask, params: response},
            ]);
          } else {
            errorToast('Error', 'Failed to save task'); // TODO: push to stack trace
          }
        })
        .catch(error => {
          console.error('Error saving task', JSON.stringify(error));
          if (error?.status === 404) {
            errorToast('Error', 'Failed to save task'); // TODO: push to stack trace
          } else {
            errorToast('Error', error.data ?? error.message); // TODO: push to stack trace
          }
        });
    }
  };

  const errorToast = (title: string, message: string) => {
    Toast.show({
      type: 'error',
      text1: title,
      text2: message,
    });
  };

  const getRandomHexColor = () => {
    let color: string;
    let brightness: number;
    do {
      // Generate a random color
      color = `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0')}`;

      // Convert hex to RGB
      const r = parseInt(color.substring(1, 3), 16);
      const g = parseInt(color.substring(3, 5), 16);
      const b = parseInt(color.substring(5, 7), 16);

      // Calculate brightness (perceived luminance)
      brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
    } while (brightness > 0.85 || brightness < 0.15); // Avoid very light (near white) and very dark (near black) colors

    return color;
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
