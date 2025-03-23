import {StyleSheet} from 'react-native';
import {accent, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    ProfileIconContainer: {
      height: 50,
      width: 50,
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    profileIconPlaceholder: {
      height: 50,
      width: 50,
    },
  });
};

export default getStyling;
