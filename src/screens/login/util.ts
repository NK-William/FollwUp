import {useEffect, useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';
import {Alert} from 'react-native';
import {isEmailValid} from '../../utils';
import {useMutate} from 'restful-react';
import {ILogin} from '../../interfaces';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/features/user/userSlice';
import {IReduxUser} from '../../interfaces';

export const useLogin = (navigation: any) => {
  // Redux
  const dispatch = useDispatch();

  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.None,
  );

  // API requests
  const {mutate: apiLogin, loading: isLoginIn} = useMutate({
    verb: 'POST',
    path: 'api/Auth/Login',
  });

  // Methods
  const handleFocusedEntry = (entry: authFocusedEntry) => {
    if (entry === authFocusedEntry.Email || entry === authFocusedEntry.Password)
      setFocused(entry);
    else setFocused(authFocusedEntry.None);
  };

  const login = () => {
    if (email === '' || password === '') {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    const form: ILogin = {
      username: email,
      password,
    };

    apiLogin(form)
      .then(async response => {
        if (response) {
          if (response.jwtToken) {
            var ReduxUser: IReduxUser = {
              emailAddress: email,
              accessToken: response.jwtToken,
            };
            dispatch(setUser(ReduxUser));
            return;
          }
          loginErrorAlert();
        } else {
          loginErrorAlert();
        }
      })
      .catch(error => {
        if (error?.status === 404) {
          // TODO: push to stack trace
          loginErrorAlert('Something went wrong, please try again later');
        } else {
          // TODO: push to stack trace
          loginErrorAlert(error.data ?? error.message);
        }
      });
  };

  const loginErrorAlert = (message?: string) =>
    Alert.alert('Error', message ?? 'Failed to log in');

  const navigateToRegisterPage = () => navigation.navigate('Register');

  return {
    email,
    password,
    focused,
    isLoginIn,
    setEmail,
    setPassword,
    handleFocusedEntry,
    navigateToRegisterPage,
    login,
  };
};
