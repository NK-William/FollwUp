import {useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';

export const useRegister = () => {
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

  return {focused, handleFocusedEntry};
};
