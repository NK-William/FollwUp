import {StyleSheet} from 'react-native';

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
