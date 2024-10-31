import {StyleSheet} from 'react-native';

const getGlobalStyling = () => {
  return StyleSheet.create({
    backButton: {
      marginLeft: 12,
      marginTop: 12,
    },
    absoluteBackButton: {
      position: 'absolute',
      top: 12,
      left: 12,
    },
  });
};

export default getGlobalStyling;
