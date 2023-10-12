import {StyleSheet} from 'react-native';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 999,
    },
  });
};

export default getStyling;
