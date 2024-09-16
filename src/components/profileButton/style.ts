import {StyleSheet} from 'react-native';
import {accent, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    profilePlaceholder: {
        height: 50,
        width: 50,
      },
  });
};

export default getStyling;
