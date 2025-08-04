import {IProfile, IReduxUser, ITask, IReturnHome} from '../../interfaces';
import {useGet} from 'restful-react';
import Toast from 'react-native-toast-message';
import {useCallback, useEffect, useState} from 'react';
import {
  signUserOut,
  selectUser,
  setUser,
} from '../../redux/features/user/userSlice';
// import {
//   selectRefetchTasksOnNavBack,
//   setRefetchTasksOnNavBack,
// } from '../../redux/features/refetchTasksOnNavBack/refetchTasksOnNavBackSlice'; // code 1
import {useSelector, useDispatch} from 'react-redux';
import {editorTask} from '../../constants/pageNames';
import {getTaskPhasePercentageValue} from '../../utils';
import {useFocusEffect} from '@react-navigation/native';
import {Alert} from 'react-native';
import getAxiosInstance from '../../utils/axiosConfig';
import {
  paymentRequiredMessage,
  paymentRequiredTitle,
} from '../../constants/localStrings';

// Global variables
var accessToken: string | undefined;

export const useHome = (navigation: any, route: any) => {
  //#region Hooks
  const [tasks, setTasks] = useState<ITask[]>();
  const {id: profileId, emailAddress} = useSelector(selectUser);
  // const selectedRefetchTasksOnNavBack = useSelector(
  //   selectRefetchTasksOnNavBack,
  // ); // code 1
  const [LoadingFromListRefresh, setLoadingFromListRefresh] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //#endregion Hooks

  //#region Apis
  const {loading: isFetchingProfile, refetch: apiFetchProfile} =
    useGet<IProfile>({
      path: '',
      lazy: true,
    });

  const {
    loading: isFetchingTasks,
    refetch: apiFetchTasks,
    error: apiFetchTasksError,
  } = useGet<ITask[]>({
    path: '',
    lazy: true,
  });

  //#endregion Apis

  //#region Effects

  useEffect(() => {
    // emailAddress has to be defined because with get to API by email address
    // And fetch when we don't have profileId because is needed as foreign key to other entities.
    if (emailAddress && !profileId) fetchProfile(emailAddress);
    else if (!emailAddress)
      // TODO: add this in a stack trace.
      console.log(
        'Home util: Failed loading email address from redux global state',
      );
    // TODO: add this in a stack trace.
    else if (profileId) fetchTasks(profileId); // If we already have profileId and email address, jump to fetching tasks
  }, [emailAddress, profileId]);

  useFocusEffect(
    useCallback(() => {
      onScreenFocus();
      return () => {
        onScreenUnfocused();
      };
    }, []),
  );

  // Show error if apiFetchTasksError is present
  useEffect(() => {
    if (apiFetchTasksError) {
      console.log('Login error:', JSON.stringify(apiFetchTasksError));
      if (apiFetchTasksError?.status === 402) {
        paymentRequiredAlert();
        signOut();
      } else {
        errorToast(apiFetchTasksError.message);
      }
    }
  }, [apiFetchTasksError]);
  //#endregion Effects

  //#region  Methods
  const onScreenFocus = async () => {
    /*console.log(
      'onScreenFocus taskReFetched: ',
      taskReFetched,
      ', profileId: ',
      profileId,
    );
    if (!taskReFetched && profileId) {
      console.log('Calling fetchTasks');
      await fetchTasks(profileId);
    }*/
    //
    /*console.log('Can we refetch: ', selectedRefetchTasksOnNavBack);
    if (selectedRefetchTasksOnNavBack && profileId) {
      console.log('Calling fetchTasks');
      await fetchTasks(profileId);
      dispatch(setRefetchTasksOnNavBack(false));
    }*/
    // code 1
  };

  const onScreenUnfocused = () => {};

  const onDataRefresh = async () => {
    if (profileId) await fetchTasks(profileId, true);
  };

  const fetchProfile = (emailAddress: string) => {
    apiFetchProfile({path: `api/Profiles/ByEmail/${emailAddress}`})
      .then(response => {
        if (response) {
          var reduxUser: IReduxUser = {
            id: response.id,
            firstName: response.firstName,
            lastName: response.lastName,
            emailAddress: response.emailAddress,
            phoneNumber: response.phoneNumber,
          };
          dispatch(setUser(reduxUser));

          if (!response.id) {
            errorToast('Failed to fetch tasks');
            return;
          }

          // Retrieve tasks
          fetchTasks(response.id);
        } else {
          errorToast('Failed to fetch profile');
        }
      })
      .catch(error => errorToast(error.message));
  };

  const fetchTasks = async (
    pId: string,
    requestFromListRefresh: boolean = false,
  ) => {
    if (requestFromListRefresh) setLoadingFromListRefresh(true);
    apiFetchTasks({path: `api/Tasks/ByProfileId/${pId}`})
      .then(response => {
        if (response) {
          try {
            // TODO: This can be removed when progressToHundred from task api is fixed (not always zero)
            response.forEach(task => {
              task.progressToHundred = getTaskPhasePercentageValue(task.phases);
            });

            setTasks(response);
          } catch (e) {
            // TODO: Add this in a stack trace
          }
        }
      })
      .finally(() => {
        if (requestFromListRefresh) setLoadingFromListRefresh(false);
      });
  };

  const deleteTask = async (taskId: string) => {
    if (taskId) {
      if (await proceedDeleteTask()) {
        try {
          if (!accessToken) accessToken = getAccessToken();

          if (!accessToken) {
            Alert.alert('Error', 'Please re-authenticate and try again');
            return;
          }

          const axiosInstance = getAxiosInstance(accessToken as string);
          setIsDeletingTask(true);
          await axiosInstance.delete(`api/Tasks/${taskId}`);
          if (profileId) await fetchTasks(profileId);
        } catch (error: any) {
          const errorMessage =
            error.response?.data?.message ||
            error.message ||
            'An unknown error occurred';

          Alert.alert('Error', errorMessage); // TODO::: display friendly error message to user, not status codes
        } finally {
          setIsDeletingTask(false);
        }
      }

      // apiDeleteTask({path: `api/Tasks/${taskId}`})
      //   .then(response => {
      //     if (response) {
      //       console.log('Successfully deleted task: ', response);
      //       // fetchTasks(profileId);
      //     }
      //   })
      //   .catch(error => {
      //     console.log('Iddd: ', taskId);
      //     console.error(JSON.stringify(error));
      //     errorToast(error.message);
      //   });
    }
  };

  const taskItemSelected = (task: ITask) => {
    navigation.navigate(editorTask, task);
  };

  const paymentRequiredAlert = () => {
    Alert.alert(paymentRequiredTitle, paymentRequiredMessage);
  };

  const proceedDeleteTask = async () => {
    return new Promise(resolve => {
      Alert.alert('Delete task', 'Are you sure you want to delete this task?', [
        {
          text: 'Cancel',
          onPress: () => resolve(false),
          style: 'cancel',
        },
        {text: 'Proceed', onPress: () => resolve(true)},
      ]);
    });
  };

  const signOut = async () => {
    dispatch(signUserOut());
  };

  // TODO::: suggestion: make axiosConfig.ts a hook and get token there
  const getAccessToken = () => {
    const userObj: IReduxUser = JSON.parse(JSON.stringify(user));
    return userObj?.accessToken;
  };

  const errorToast = (message: string) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
  };

  const progressBarTasks = (tasks: ITask[]) => {
    return tasks.map(({name, color, progressToHundred}) => ({
      name,
      color,
      progressToHundred,
    }));
  };
  //#endregion Methods

  return {
    tasks,
    tasksDefined: tasks?.length,
    loading: isFetchingProfile || isFetchingTasks || isDeletingTask,
    LoadingFromListRefresh,
    progressBarTasks,
    taskItemSelected,
    deleteTask,
    onDataRefresh,
  };
};
