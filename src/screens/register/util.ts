import {useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';

export const useRegister = (navigation: any) => {
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.None,
  );

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

  const navigateToRegisterPage = () => navigation.goBack();

  return {focused, handleFocusedEntry, navigateToRegisterPage};
};
