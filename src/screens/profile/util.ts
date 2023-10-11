import {useState} from 'react';
import {IProfileState} from './interface';

const initialState: IProfileState = {
  firstName: 'Tebogo',
  lastName: 'Nkuna',
  idNumber: '9701010000000',
  emailAddress: 'Tebog@gmail.com',
  phoneNumber: '0712932445',
};

export const useProfile = () => {
  const [{firstName, lastName, idNumber, emailAddress, phoneNumber}, setState] =
    useState<IProfileState>(initialState);

  return {firstName, lastName, idNumber, emailAddress, phoneNumber, setState};
};
