export const useProgressTaskName = (props: any) => {
  const firstNameLetter = props.clientFirstName.trim().charAt(0).toUpperCase();
  const lastNameLetter = props.clientLastName.trim().charAt(0).toUpperCase();
  const letters = `${firstNameLetter}${lastNameLetter}`;

  return {letters};
};
