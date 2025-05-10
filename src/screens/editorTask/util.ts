import {Alert, BackHandler} from 'react-native';
import {
  ModalEnum,
  PhaseSubmissionActionEnum,
  taskPhaseStatus,
} from '../../utils/enums';
import {accent, gray, grayLight, primary} from '../../constants/colors';
import {useState} from 'react';
import {
  ITask,
  IModalPhase,
  IPhase,
  IReduxUser,
  IReturnHome,
  IIconNameType,
} from '../../interfaces';
import {useGet, useMutate} from 'restful-react';
import {MutateRequestOptions} from 'restful-react/dist/Mutate';
import getAxiosInstance from '../../utils/axiosConfig';
import {/*useDispatch,*/ useSelector} from 'react-redux'; // code 1
import {selectUser} from '../../redux/features/user/userSlice';
import Toast from 'react-native-toast-message';
import {resetToScreen} from '../../utils';
import {home} from '../../constants/pageNames';
// import {
//   selectRefetchTasksOnNavBack,
//   setRefetchTasksOnNavBack,
// } from '../../redux/features/refetchTasksOnNavBack/refetchTasksOnNavBackSlice'; // code 1

// Demo data
// const demoTask: ITask = {
//   id: 'a2a40445-d8ca-4aa5-30c5-08dd0f1c6c21',
//   name: 'Demo Engine rebuild',
//   progressToHundred: 0,
//   organization: 'KIA LAZARUS',
//   status: 0,
//   description: 'On a VW GTI, 2016 year model.',
//   eta: new Date(),
//   color: '#FFAACC',
//   phases: [
//     {
//       id: '24f1d6b0-c5f9-4a7f-9fd1-08dd0f1c6c61',
//       name: 'Diagnostic',
//       number: 1,
//       description:
//         "We will strip the engine to find all the parts we'll need to replace.",
//       icon: 'settings-outline',
//       status: 2,
//     },
//     {
//       id: 'd87b3d38-be1e-4129-9fd2-08dd0f1c6c61',
//       name: 'Quotation',
//       number: 2,
//       description:
//         'We will send a quotation before we start ordering the parts.',
//       icon: 'document-text-outline',
//       status: 1,
//     },
//     {
//       id: 'e45ed5f9-92d8-4f98-9fd3-08dd0f1c6c61',
//       name: 'Awaiting parts',
//       number: 3,
//       description: 'This will take about 7 working days',
//       icon: 'hourglass-outline',
//       status: 0,
//     },
//     {
//       id: '6882135c-7570-49aa-9fd4-08dd0f1c6c61',
//       name: 'Rebuild process',
//       number: 4,
//       description: 'This will take about 2 weeks',
//       icon: 'construct-outline',
//       status: 0,
//     },
//     {
//       id: 'a0852710-1dfa-40e4-9fd5-08dd0f1c6c61',
//       name: 'Test',
//       number: 5,
//       description: 'We will test the car to ensure everything is working.',
//       icon: '',
//       status: 0,
//     },
//     {
//       id: 'aac7109f-bfa7-4531-9fd6-08dd0f1c6c61',
//       name: 'Ready',
//       number: 6,
//       description: 'Car is ready for collection',
//       icon: 'call-outline',
//       status: 0,
//     },
//   ],
//   roles: [
//     {
//       id: '0ae35c90-1475-4003-71db-08dd0f1c6c83',
//       roleType: 2,
//       taskId: 'a2a40445-d8ca-4aa5-30c5-08dd0f1c6c21',
//       profileId: '3689581c-01a6-4949-ed5f-08dcd5b3823b',
//     },
//   ],
//   invitation: {
//     id: 'ace0d015-47e3-4a42-bb19-08dd0f1c6c8d',
//     phoneNumber: '0711111111',
//     roleType: 1,
//   },
// };

// Inner interfaces
interface IModalVisibilities {
  showPhaseDetailsModal: boolean;
  showPhaseEditModal: boolean;
}

// Global variables
var initModalVisibilities: IModalVisibilities = {
  showPhaseDetailsModal: false,
  showPhaseEditModal: false,
};
var modalPhase: IModalPhase;
var phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Edit;
var accessToken: string | undefined;

export const useEditorTask = (navigation: any, t: ITask) => {
  //#region Hooks
  const user = useSelector(selectUser);
  // const selectedRefetchTasksOnNavBack = useSelector(
  //   selectRefetchTasksOnNavBack,
  // ); // code 1
  // const dispatch = useDispatch(); // code 1
  const [modalVisibilities, setModalVisibilities] =
    useState<IModalVisibilities>(initModalVisibilities);
  const [task, setTask] = useState<ITask>(t);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOnPhaseModal, setIsLoadingOnPhaseModal] = useState(false);
  //#endregion Hooks

  //#region API hooks
  const {refetch: apiFetchTask, loading: isFetchingTask} = useGet<ITask>({
    path: '',
    lazy: true,
  });
  //#endregion API requests

  const getNumberOfCompletedPhases = () => {
    const completedPhases = task.phases.filter(
      item => item.status === taskPhaseStatus.Completed,
    ).length;

    return completedPhases;

    // let currentIndexPhase = task.phases.findIndex(
    //   phase => phase.status === taskPhaseStatus.InProgress,
    // );

    // console.log('Current index: ', currentIndexPhase);
    // if (currentIndexPhase > 0) return task.phases[--currentIndexPhase].number;

    // // If all items are pending
    // if (task.phases.every(phase => phase.status === taskPhaseStatus.Pending))
    //   return 0;

    // // If all items are completed
    // if (task.phases.every(phase => phase.status === taskPhaseStatus.Completed))
    //   return task.phases.length;

    // return undefined;
  };

  const expandPhaseDetails = (details: IModalPhase) => {
    modalPhase = details;
    modalToDisplay(ModalEnum.ViewDetails);
  };

  const onEditClick = (
    name: string,
    number: number,
    status: taskPhaseStatus,
    description?: string,
    icon?: IIconNameType,
    id?: string,
  ) => {
    modalPhase = {id, name, description, icon, number, status};
    phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Edit;
    modalToDisplay(ModalEnum.Edit);
  };

  const onAddClick = (number: number) => {
    modalPhase = {number};
    phaseModalPositiveButtonToPerform = PhaseSubmissionActionEnum.Add;
    modalToDisplay(ModalEnum.Edit);
  };

  const onDelete = async (phaseId: string) => {
    if (isDeletingInProgressPhase(phaseId)) {
      Alert.alert(
        'Error',
        'You cannot delete phase that is in progress, set other phase to in progress first',
      );
      return;
    }

    const confirmed = await confirmPopUp('Are you sure you want to delete?');
    if (!confirmed) return;

    try {
      if (!accessToken) accessToken = getAccessToken();

      if (!accessToken) {
        Alert.alert('Error', 'Please re-authenticate and try again');
        return;
      }

      const axiosInstance = getAxiosInstance(accessToken as string);
      setIsLoading(true);
      await axiosInstance.delete(`/api/Phases/${phaseId}`);
      dispatchTaskRefetchValue();
      await getUpdatedTask();
    } catch (error: any) {
      console.log('Error deleting phase: ', error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred';

      Alert.alert('Error', errorMessage); // TODO::: display friendly error message to user, not status codes
    } finally {
      setIsLoading(false);
    }
  };

  const isDeletingInProgressPhase = (phaseId: string) => {
    let p = task.phases.find(p => p.id === phaseId);
    return p?.status === taskPhaseStatus.InProgress;
  };

  const closeEditModal = () => {
    modalToDisplay(ModalEnum.None);
    modalPhase = {
      id: undefined,
      name: undefined,
      description: undefined,
      icon: undefined,
      number: 0,
    };
  };

  const editPhase = async (editedPhase: IModalPhase) => {
    try {
      if (!accessToken) accessToken = getAccessToken();

      if (!accessToken) {
        Alert.alert('Error', 'Please re-authenticate to and try again');
        return;
      }

      const axiosInstance = getAxiosInstance(accessToken as string);
      setIsLoadingOnPhaseModal(true);
      console.log('Editing with payload: ', JSON.stringify(editedPhase));
      await axiosInstance.put(
        `/api/Phases/${editedPhase.id}?statusOnly=false`,
        {...editedPhase, taskId: task.id},
      );
      await getUpdatedTask();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred';

      Alert.alert('Error', errorMessage); // TODO::: display friendly error message to user, not status codes
    } finally {
      closeEditModal();
      setIsLoadingOnPhaseModal(false);
    }
  };

  const savePhase = async (newPhase: IModalPhase) => {
    console.log('Saving with payload: ', newPhase);

    try {
      if (!accessToken) accessToken = getAccessToken();

      if (!accessToken) {
        Alert.alert('Error', 'Please re-authenticate to and try again');
        return;
      }

      const axiosInstance = getAxiosInstance(accessToken as string);
      setIsLoadingOnPhaseModal(true);
      console.log('Saving with payload: ', JSON.stringify(newPhase));
      await axiosInstance.post(`/api/Phases`, {...newPhase, taskId: task.id});
      dispatchTaskRefetchValue();
      await getUpdatedTask();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred';

      Alert.alert('Error', errorMessage); // TODO::: display friendly error message to user, not status codes
    } finally {
      closeEditModal();
      setIsLoadingOnPhaseModal(false);
    }
  };

  const updatePhaseStatus = async (id: string) => {
    // TODO::: Add if statement to check if phase is already in progress

    let p = task.phases.find(p => p.id === id);

    if (p && p.id) {
      if (p.status === taskPhaseStatus.InProgress) return;

      const confirmed = await confirmPopUp('Are you sure you want to update?');
      if (!confirmed) return;

      const phaseToUpdate = {...p, status: taskPhaseStatus.InProgress};

      console.log('Updating phase: ', JSON.stringify(phaseToUpdate));

      try {
        if (!accessToken) accessToken = getAccessToken();

        if (!accessToken) {
          Alert.alert('Error', 'Please re-authenticate to and try again');
          return;
        }

        const axiosInstance = getAxiosInstance(accessToken as string);
        setIsLoading(true);
        console.log('Updating with payload: ', JSON.stringify(phaseToUpdate));
        await axiosInstance.put(
          `/api/Phases/${phaseToUpdate.id}?statusOnly=true`,
          phaseToUpdate,
        );
        dispatchTaskRefetchValue();
        await getUpdatedTask();
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          'An unknown error occurred';

        Alert.alert('Error', errorMessage); // TODO::: display friendly error message to user, not status codes
      } finally {
        setIsLoading(false);
      }
    }

    // apiUpdatePhaseStatus(phaseToUpdate
    // )
    //   .then(async response => {
    //     if (response) {
    //       console.log(' Phase status updated: ', response);
    //     }
    //   })
    //   .catch(error => {
    //     console.log('Error updating phase status: ', JSON.stringify(error));
    //   });
    // TODO::: execute api to update phase status to in-progress
  };

  const getUpdatedTask = async () => {
    apiFetchTask({path: `api/Tasks/${task.id}`})
      .then(response => {
        if (response) {
          console.log('Updated successfully: ');
          setTask(response);
        }
      })
      .catch(error => fetchErrorToast(error.message));
  };

  const onCompleteTask = async () => {
    const confirmed = await confirmPopUp(
      'Are you sure you want to complete task?',
    );
    if (!confirmed) return;

    try {
      if (!accessToken) accessToken = getAccessToken();

      if (!accessToken) {
        Alert.alert('Error', 'Please re-authenticate to and try again');
        return;
      }

      const axiosInstance = getAxiosInstance(accessToken as string);
      setIsLoading(true);
      await axiosInstance.put(`/api/Tasks/Complete/${task.id}`);
      dispatchTaskRefetchValue();
      await getUpdatedTask();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An unknown error occurred';

      Alert.alert('Error', errorMessage); // TODO::: display friendly error message to user, not status codes
    } finally {
      setIsLoading(false);
    }
  };

  const phaseModalSaveAction = (p: IModalPhase) => {
    modalPhase = {...p};
    if (phaseModalPositiveButtonToPerform === PhaseSubmissionActionEnum.Edit)
      editPhase(p);
    else savePhase(p);
  };

  const modalToDisplay = (modalToDisplay: ModalEnum) => {
    switch (modalToDisplay) {
      case ModalEnum.ViewDetails:
        setModalVisibilities({
          showPhaseEditModal: false,
          showPhaseDetailsModal: true,
        });
        break;
      case ModalEnum.Edit:
        setModalVisibilities({
          showPhaseDetailsModal: false,
          showPhaseEditModal: true,
        });
        break;
      case ModalEnum.None:
        setModalVisibilities({
          showPhaseDetailsModal: false,
          showPhaseEditModal: false,
        });
        break;
      default:
        setModalVisibilities({
          showPhaseDetailsModal: false,
          showPhaseEditModal: false,
        });
    }
  };

  const getAccessToken = () => {
    const userObj: IReduxUser = JSON.parse(JSON.stringify(user));
    return userObj?.accessToken;
  };

  const dispatchTaskRefetchValue = () => {
    /* console.log(
      'selectedRefetchTasksOnNavBack: ',
      selectedRefetchTasksOnNavBack,
    );
    if (!selectedRefetchTasksOnNavBack) {
      console.log('Dispatching refetch task on nav back');
      dispatch(setRefetchTasksOnNavBack(true));
    }*/
    // code 1
  };

  const confirmPopUp = (message: string, title: string = 'Confirmation') => {
    return new Promise(resolve => {
      Alert.alert(title, message, [
        {
          text: 'Yes',
          onPress: () => resolve(true),
        },
        {
          text: 'No',
          onPress: () => resolve(false),
        },
      ]);
    });
  };

  const fetchErrorToast = (message: string) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
  };

  const showLoader = isLoading || isFetchingTask;
  const showLoaderOnPhaseModal = isLoadingOnPhaseModal;

  return {
    taskData: task,
    modalPhase,
    modalVisibilities,
    phaseModalPositiveButtonToPerform,
    showLoader,
    showLoaderOnPhaseModal,
    updatePhaseStatus,
    onEditClick,
    onDelete,
    closeEditModal,
    expandPhaseDetails,
    modalToDisplay,
    getNumberOfCompletedPhases,
    onAddClick,
    phaseModalSaveAction,
    onCompleteTask,
  };
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
