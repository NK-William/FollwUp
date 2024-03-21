import {StyleSheet} from 'react-native';
import {accent, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      backgroundColor: primary,
      borderBottomLeftRadius: 70,
      borderBottomRightRadius: 70,
      height: 185,
    },
    profilePlaceholder: {
      height: 50,
      width: 50,
      alignSelf: 'flex-end',
      marginTop: 8,
    },
    title: {
      alignSelf: 'center',
      color: lightText,
      fontSize: 30,
      marginTop: -25,
      fontWeight: 'bold',
    },
    phasesTrackText: {
      alignSelf: 'center',
      color: lightText,
      marginTop: 14,
    },
    estimationText: {
      alignSelf: 'center',
      color: lightText,
    },
    progressBar: {width: 220, alignSelf: 'center', marginTop: 6},
    positiveButton: {
      backgroundColor: accent,
      height: 22,
      alignSelf: 'center',
      marginVertical: 8,
    },
    positiveButtonText: {
      fontSize: 14,
      fontWeight: 'normal',
      color: lightText,
    },
  });
};

export default getStyling;
