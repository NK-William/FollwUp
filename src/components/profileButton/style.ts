import {StyleSheet} from 'react-native';
import {accent, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      height: 50,
      marginTop: 8,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    profilePlaceholder: {
      height: 50,
      width: 50,
    },
  });
};

export default getStyling;
