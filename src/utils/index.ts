import {StyleSheet} from 'react-native';
import {IPhase} from '../interfaces';
import {taskPhaseStatus} from './enums';

export const flatten = (obj: any) => {
  return StyleSheet.flatten(obj);
};

export const isEmailValid = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
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
