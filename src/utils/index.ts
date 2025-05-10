import {StyleSheet} from 'react-native';
import {IPhase} from '../interfaces';
import {IconTypeEnum, taskPhaseStatus} from './enums';

export const flatten = (obj: any) => {
  return StyleSheet.flatten(obj);
};

export const isEmailValid = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isPhoneNumberValid = (phoneNumber: string) => {
  const regex = /^0(6\d|7\d|8\d|9\d)\d{7}$/;
  return regex.test(phoneNumber);
};

export const isDateNotPast = (date: Date) => {
  const today = new Date();
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const capturedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  return capturedDate >= todayDate;
};

// export const resetToScreen = (navigation: any, routes: {name: string}[]) => {
//   navigation.reset({
//     index: 0,
//     routes,
//   });
// };

export const resetToScreen = (
  navigation: any,
  routes: {name: string; params?: object}[],
) => {
  navigation.reset({
    index: 0,
    routes,
  });
};

export const getTaskPhasePercentageValue = (phases: IPhase[]) => {
  const totalPhases = phases.length;
  const completedPhases = phases.filter(
    item => item.status === taskPhaseStatus.Completed,
  ).length;

  return Math.round((completedPhases / totalPhases) * 100);
};

export const getIconType = (
  value: IconTypeEnum,
):
  | 'Ionicons'
  | 'AntDesign'
  | 'Fontisto'
  | 'Feather'
  | 'FontAwesome5'
  | 'FontAwesome'
  | 'Entypo' => {
  switch (value) {
    case IconTypeEnum.Ionicons:
      return 'Ionicons';
    default:
      return 'Ionicons';
  }
};
