import {ColorValue} from 'react-native';
import {IProfile, IReduxUser, ITask} from '../../interfaces';
import {useGet} from 'restful-react';
import Toast from 'react-native-toast-message';
import {useEffect} from 'react';
import {selectUser, setUser} from '../../redux/features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';

export const useHome = () => {
  //#region Redux
  const {id, emailAddress} = useSelector(selectUser);
  const dispatch = useDispatch();
  //#endregion Redux

  // apis
  const {loading: isFetchingProfile, refetch: apiFetchProfile} =
    useGet<IProfile>({
      path: '',
      lazy: true,
    });

  // useEffects
  useEffect(() => {
    if (emailAddress && !id) fetchProfile(emailAddress);
    else if (!emailAddress)
      console.log(
        'Home util: Failed loading email address from redux global state',
      ); // TODO: add this in a stack trace.
  }, [emailAddress, id]);

  // Methods
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
          return;
        }
        fetchErrorToast('Failed to fetch profile');
      })
      .catch((error: any) => fetchErrorToast(error.message));
  };

  const fetchErrorToast = (message: string) => {
    console.log('Home error: ', message);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
  };

  const progressBarTasks = (
    tasks: ITask[],
  ): {name: string; color: ColorValue; progressToHundred: number}[] => {
    return tasks.map(({name, color, progressToHundred}) => ({
      name,
      color,
      progressToHundred,
    }));
  };

  return {progressBarTasks, isFetchingProfile};
};
