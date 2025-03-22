import {ColorValue} from 'react-native';
import {IProfile, IReduxUser, ITask} from '../../interfaces';
import {useGet} from 'restful-react';
import Toast from 'react-native-toast-message';
import {useCallback, useEffect, useState} from 'react';
import {selectUser, setUser} from '../../redux/features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {editorTask} from '../../constants/pageNames';
import {useFocusEffect} from '@react-navigation/native';

//#region Global variables
let taskReFetched = false;

export const useHome = (navigation: any) => {
  //#region Hooks
  const [tasks, setTasks] = useState<ITask[]>();
  const {id: profileId, emailAddress} = useSelector(selectUser);
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
  //#endregion Effects

  //#region  Methods

  const onScreenFocus = async () => {
    if (!taskReFetched && profileId) {
      await fetchTasks(profileId);
    }
  };

  const onScreenUnfocused = () => {
    taskReFetched = false;
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

  const fetchTasks = (pId: string) => {
    taskReFetched = true;
    apiFetchTasks({path: `api/Tasks/ByProfileId/${pId}`})
      .then(response => {
        if (response) {
          setTasks(response);
        } else {
          fetchErrorToast('Failed to fetch tasks');
        }
      })
      .catch(error => fetchErrorToast(error.message));
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
    progressBarTasks,
    taskItemSelected,
  };
};
