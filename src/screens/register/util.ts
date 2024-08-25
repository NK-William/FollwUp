import {useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';
import {Alert} from 'react-native';
import {isEmailValid} from '../../utils';
import {useMutate} from 'restful-react';
import {IRegister} from '../../interfaces/register';
import {Commands} from 'react-native-screens/lib/typescript/fabric/SearchBarNativeComponent';
import Toast from 'react-native-toast-message';

const initialForm: IRegister = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
};

export const useRegister = (navigation: any) => {
  // States
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.None,
  );
  const [form, setForm] = useState<IRegister>(initialForm);

  // API requests
  const {mutate: apiRegister, loading: isRegistering} = useMutate({
    verb: 'POST',
    path: 'api/Auth/Register',
  });

  // Methods
  const handleFocusedEntry = (entry: authFocusedEntry) => {
    if (
      entry === authFocusedEntry.FirstName ||
      entry === authFocusedEntry.LastName ||
      entry === authFocusedEntry.PhoneNumber ||
      entry === authFocusedEntry.Email ||
      entry === authFocusedEntry.Password
    )
      setFocused(entry);
    else setFocused(authFocusedEntry.None);
  };

  const register = () => {
    if (!fieldsAreAllFilled()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    if (!isEmailValid(form.email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    if (form.password.length < 6) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 6 characters long',
      );
      return;
    }

    apiRegister(form)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Account created successfully',
          text2: 'You can now login',
        });
        navigateToRegisterPage();
      })
      .catch(error => {
        console.log('error: ', error);
        Alert.alert('Error', error.data ?? error.message);
      });
  };

  const fieldsAreAllFilled = () => {
    return Object.values(form).every(value => value !== '');
  };

  const navigateToRegisterPage = () => navigation.goBack();

  return {
    focused,
    form,
    isRegistering,
    setForm,
    register,
    handleFocusedEntry,
    navigateToRegisterPage,
  };
};
