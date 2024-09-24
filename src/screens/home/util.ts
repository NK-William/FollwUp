import {ColorValue} from 'react-native';
import {ITask} from '../../interfaces';
import {useGet} from 'restful-react';
import Toast from 'react-native-toast-message';
import {useEffect} from 'react';

export const useHome = () => {
  const {loading, refetch: apiFetchProfile} = useGet({
    path: '',
    lazy: true,
  });

  useEffect(() => {
    fetchProfile('test@gmail.com');
  }, []);

  const fetchProfile = (emailAddress: string) => {
    apiFetchProfile({path: `api/Profiles/ByEmail/${emailAddress}`})
      .then(response => {
        console.log('Response: ', JSON.stringify(response));
        if (response) {
          console.log('Successfully fetched profile: ', response);
          return;
        }
        fetchErrorToast('Failed to fetch profile');
      })
      .catch((error: any) => fetchErrorToast(error.message));
  };

  const fetchErrorToast = (message: string) => {
    console.log('Error: ', message);
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
  return {progressBarTasks};
};
