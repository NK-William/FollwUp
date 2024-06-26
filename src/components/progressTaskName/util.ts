export const useProgressTaskName = (props: any) => {
  const firstNameLetter = props.clientFirstName?.trim().charAt(0).toUpperCase();
  const lastNameLetter = props.clientLastName?.trim().charAt(0).toUpperCase();
  let letters = '?';
  if (firstNameLetter && lastNameLetter)
    letters = `${firstNameLetter}${lastNameLetter}`;

  const showInviteIcon = () => {
    if (props.clientFirstName && props.clientLastName) return false;
    else return true;
  };

  const inviteIconVisible = showInviteIcon();

  return {letters, inviteIconVisible};
};
