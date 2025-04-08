import {IProfile, IReduxUser, ITask, IReturnHome} from '../../interfaces';
import {useGet} from 'restful-react';
import Toast from 'react-native-toast-message';
import {useCallback, useEffect, useState} from 'react';
import {selectUser, setUser} from '../../redux/features/user/userSlice';
// import {
//   selectRefetchTasksOnNavBack,
//   setRefetchTasksOnNavBack,
// } from '../../redux/features/refetchTasksOnNavBack/refetchTasksOnNavBackSlice'; // code 1
import {useSelector, useDispatch} from 'react-redux';
import {editorTask} from '../../constants/pageNames';
import {getTaskPhasePercentageValue} from '../../utils';
import {useFocusEffect} from '@react-navigation/native';

export const useHome = (navigation: any, route: any) => {
  //#region Hooks
  const [tasks, setTasks] = useState<ITask[]>();
  const {id: profileId, emailAddress} = useSelector(selectUser);
  // const selectedRefetchTasksOnNavBack = useSelector(
  //   selectRefetchTasksOnNavBack,
  // ); // code 1
  const [LoadingFromListRefresh, setLoadingFromListRefresh] = useState(false);
  const dispatch = useDispatch();
  //#endregion Hooks

  //#region Apis
  const {loading: isFetchingProfile, refetch: apiFetchProfile} =
    useGet<IProfile>({
      path: '',
      lazy: true,
    });

  const {loading: isFetchingTasks, refetch: apiFetchTasks} = useGet<ITask[]>({
    path: '',
    lazy: true,
  });
  //#endregion Apis

  //#region Effects

  useEffect(() => {
    // emailAddress has to be defined because with get to API by email address
    // And fetch when we don't have profileId because is needed as foreign key to other entities.
    console.log('Use eff');
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
      console.log('Home util: Screen focused');
      onScreenFocus();
      return () => {
        onScreenUnfocused();
      };
    }, []),
  );
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

  const onScreenUnfocused = () => {
    console.log('onScreenUnfocused');
  };

  const onDataRefresh = async () => {
    if (profileId) await fetchTasks(profileId, true);
  };

  const fetchProfile = (emailAddress: string) => {
    console.log('Fetchiiiiiiiiing');
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

          console.log('Successfully fetched profile: ', response);

          if (!response.id) {
            fetchErrorToast('Failed to fetch tasks');
            return;
          }

          // Retrieve tasks
          fetchTasks(response.id);
        } else {
          fetchErrorToast('Failed to fetch profile');
        }
      })
      .catch(error => fetchErrorToast(error.message));
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
      .catch(error => fetchErrorToast(error.message))
      .finally(() => {
        console.log('Finally');
        if (requestFromListRefresh) setLoadingFromListRefresh(false);
      });
  };

  const taskItemSelected = (task: ITask) => {
    navigation.navigate(editorTask, task);
  };

  const fetchErrorToast = (message: string) => {
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
    loading: isFetchingProfile || isFetchingTasks,
    LoadingFromListRefresh,
    progressBarTasks,
    taskItemSelected,
    onDataRefresh,
  };
};
