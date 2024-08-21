import {useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';
import {Alert} from 'react-native';
import {isEmailValid} from '../../utils';

interface IForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const initialForm: IForm = {
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
  const [form, setForm] = useState<IForm>(initialForm);

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

    console.log('register');
  };

  const fieldsAreAllFilled = () => {
    return Object.values(form).every(value => value !== '');
  };

  const navigateToRegisterPage = () => navigation.goBack();

  return {
    focused,
    form,
    setForm,
    register,
    handleFocusedEntry,
    navigateToRegisterPage,
  };
};
