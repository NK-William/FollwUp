import {useEffect, useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';
import {Alert} from 'react-native';
import {isEmailValid} from '../../utils';
import {useMutate} from 'restful-react';
import {loginApi} from '../../constants/apis';
import {ILogin} from '../../interfaces';
import {accessTokenKey} from '../../constants/cacheKeys';
import {AsyncStorage} from 'react-native';

export const useLogin = (navigation: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.None,
  );

  const {mutate: apiLogin, loading: isLoginIn} = useMutate({
    verb: 'POST',
    path: 'api/Auth/Login',
  });

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
            // await AsyncStorage.setItem(accessTokenKey, response.jwtToken);
            // navigation.navigate('Home');
            return;
          }
          loginErrorAlert();
        } else {
          loginErrorAlert();
        }
      })
      .catch(error => {
        Alert.alert('Error', error.data ?? error.message);
      });
  };

  const loginErrorAlert = () => Alert.alert('Error', 'Failed to log in');

  const navigateToRegisterPage = () => navigation.navigate('Register');

  return {
    email,
    password,
    focused,
    setEmail,
    setPassword,
    handleFocusedEntry,
    navigateToRegisterPage,
    login,
  };
};
