import {useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';

export const useLogin = (navigation: any) => {
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.None,
  );

  const handleFocusedEntry = (entry: authFocusedEntry) => {
    if (entry === authFocusedEntry.Email || entry === authFocusedEntry.Password)
      setFocused(entry);
    else setFocused(authFocusedEntry.None);
  };

  const navigateToRegisterPage = () => navigation.navigate('Register');

  return {focused, handleFocusedEntry, navigateToRegisterPage};
};
