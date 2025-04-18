import {useState} from 'react';
import {IProfileState} from './interface';
import {IUpdateProfileDTO, IProfile} from '../../interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {
  signUserOut,
  selectUser,
  setUser,
} from '../../redux/features/user/userSlice';
import {IReduxUser} from '../../interfaces';
import getAxiosInstance from '../../utils/axiosConfig';
import Toast from 'react-native-toast-message';
import {updateProfileEnum} from '../../utils/enums';
import {Alert} from 'react-native';
// import {
//   launchCamera,
//   launchImageLibrary,
//   ImagePickerResponse,
// } from 'react-native-image-picker';
// import {cameraPickerType} from './enum';

export const useProfile = (navigation: any) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const globalUser = user as IReduxUser;

  // I've added this method here so that we don't get undefined when referencing it in getInitProfileState method
  const alignProfileState = (profile: IProfile): IProfileState => {
    return {
      firstName: profile.firstName ?? '',
      lastName: profile.lastName ?? '',
      emailAddress: profile.emailAddress ?? '',
      phoneNumber: profile.phoneNumber ?? '',
      showPopup: false,
      // previous state
      prevFirstName: profile.firstName ?? '',
      prevLastName: profile.lastName ?? '',
      prevPhoneNumber: profile.phoneNumber ?? '',
    };
  };
  const getInitProfileState = (): IProfileState => {
    return alignProfileState(globalUser as IProfile);
  };
  const [
    {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      showPopup,
      prevFirstName,
      prevLastName,
      prevPhoneNumber,
    },
    setState,
  ] = useState<IProfileState>(getInitProfileState());

  const signOut = async () => {
    if (await proceedSignout()) dispatch(signUserOut());
    // await AsyncStorage.removeItem(accessTokenKey);
    // resetToScreen(navigation, login);
  };

  const proceedSignout = async () => {
    return new Promise(resolve => {
      Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out?',
        [
          {
            text: 'Cancel',
            onPress: () => resolve(false),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              resolve(true);
            },
          },
        ],
        {cancelable: false},
      );
    });
  };

  const firstNameUpdateClicked = (text: string) =>
    updateUserProfile(text, updateProfileEnum.FirstName);
  const lastNameUpdateClicked = (text: string) =>
    updateUserProfile(text, updateProfileEnum.LastName);
  const phoneNumberUpdateClicked = (text: string) =>
    updateUserProfile(text, updateProfileEnum.PhoneNumber);

  const updateUserProfile = async (
    text: string,
    targetField: updateProfileEnum,
  ) => {
    if (user.accessToken && user.id) {
      const axiosInstance = getAxiosInstance(user.accessToken);
      try {
        let updateProfileDTO: IUpdateProfileDTO = {
          id: user.id,
          firstName,
          lastName,
          phoneNumber,
        };
        switch (targetField) {
          case updateProfileEnum.FirstName:
            updateProfileDTO.firstName = text;
            break;
          case updateProfileEnum.LastName:
            updateProfileDTO.lastName = text;
            break;
          case updateProfileEnum.PhoneNumber:
            updateProfileDTO.phoneNumber = text;
            break;
        }

        setIsLoading(true);
        const response = await axiosInstance.put(
          'api/Profiles',
          updateProfileDTO,
        );
        setIsLoading(false);
        if (response.data) {
          updateStates(response.data as IProfile);
        } else {
          // navigate user back to home and display no-data error popup
        }
        Toast.show({
          type: 'success',
          text1: 'Profile updated successfully',
        });
      } catch (error) {
        // TODO::: Report error
        Toast.show({
          type: 'error',
          text1: 'Error updating profile',
        });
      }
    }
  };

  const updateStates = (profile: IProfile) => {
    setState(s => alignProfileState(profile));
    dispatch(setUser(profile));
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
    prevFirstName,
    prevLastName,
    prevPhoneNumber,
    isLoading,
    setState,
    signOut,
    firstNameUpdateClicked,
    lastNameUpdateClicked,
    phoneNumberUpdateClicked,
    // cameraClicked,
  };
};
