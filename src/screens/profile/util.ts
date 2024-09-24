import {useState} from 'react';
import {IProfileState} from './interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetToScreen} from '../../utils';
import {login} from '../../constants/pageNames';
import {accessTokenKey} from '../../constants/cacheKeys';
// import {
//   launchCamera,
//   launchImageLibrary,
//   ImagePickerResponse,
// } from 'react-native-image-picker';
// import {cameraPickerType} from './enum';

const initialState: IProfileState = {
  firstName: 'Tebogo',
  lastName: 'Nkuna',
  emailAddress: 'Tebog@gmail.com',
  phoneNumber: '0712932445',
  showPopup: false,
};

export const useProfile = (navigation: any) => {
  const [
    {firstName, lastName, emailAddress, phoneNumber, showPopup},
    setState,
  ] = useState<IProfileState>(initialState);

  const signOut = async () => {
    await AsyncStorage.removeItem(accessTokenKey);
    resetToScreen(navigation, login);
  };

  // const cameraClicked = async (type: cameraPickerType) => {
  //   let result: ImagePickerResponse;
  //   if (type === cameraPickerType.CAMERA) {
  //     result = await launchCamera({mediaType: 'photo'});
  //   } else {
  //     result = await launchImageLibrary({mediaType: 'photo'});
  //   }
  //   console.log(result);
  //   setState(s => ({...s, showPopup: false}));
  // };

  return {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    showPopup,
    setState,
    signOut,
    // cameraClicked,
  };
};
