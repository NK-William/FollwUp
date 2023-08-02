import {useState} from 'react';
import {authFocusedEntry} from '../../utils/enums';

export const useLogin = () => {
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.None,
  );

  const handleFocusedEntry = (entry: authFocusedEntry) => {
    if (entry === authFocusedEntry.Email || entry === authFocusedEntry.Password)
      setFocused(entry);
    else setFocused(authFocusedEntry.None);
  };
  return {focused, handleFocusedEntry};
};
