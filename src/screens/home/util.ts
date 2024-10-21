import {ColorValue} from 'react-native';
import {IProfile, IReduxUser, ITask} from '../../interfaces';
import {useGet} from 'restful-react';
import Toast from 'react-native-toast-message';
import {useEffect, useState} from 'react';
import {selectUser, setUser} from '../../redux/features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';

export const useHome = () => {
  //#region Hooks
  const [tasks, setTasks] = useState<ITask[]>();
  const {id, emailAddress} = useSelector(selectUser);
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

  //#region useEffects
  useEffect(() => {
    // emailAddress has to be defined because with get to API by email address
    // And fetch when we don't have id because is needed as foreign key to other entities.
    // if (emailAddress && !id) fetchProfile(emailAddress);
    if (true) fetchProfile(emailAddress);
    else if (!emailAddress)
      console.log(
        'Home util: Failed loading email address from redux global state',
      ); // TODO: add this in a stack trace.
  }, [emailAddress, id]);
  //#endregion useEffects

  //#region  Methods
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

  const fetchTasks = (profileId: string) => {
    apiFetchTasks({path: `api/Tasks/ByProfileId/${profileId}`})
      .then(response => {
        if (response) {
          setTasks(response);
          // console.log('Got tasks: ', JSON.stringify(response));
        } else {
          fetchErrorToast('Failed to fetch tasks');
        }
      })
      .catch(error => fetchErrorToast(error.message));
  };

  const fetchErrorToast = (message: string) => {
    console.log('Home error: ', message);
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
    loading: isFetchingProfile || isFetchingTasks,
    progressBarTasks,
  };
};
