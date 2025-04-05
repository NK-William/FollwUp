import {StyleSheet} from 'react-native';
import {accent, darkText} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {},
    underlinedText: {alignSelf: 'center', marginBottom: 40},
    entryLabel: {
      marginHorizontal: 22,
      marginVertical: 10,
    },
    dateEntryLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      color: darkText,
      marginBottom: 6,
    },
    rightPressableText: {
      textAlign: 'right',
      marginHorizontal: 30,
      fontSize: 16,
    },
    follwUpButtonText: {
      color: accent,
    },
    follwUpButton: {
      alignSelf: 'center',
      marginTop: 40,
      marginBottom: 10,
      width: 160,
      height: 50,
      borderWidth: 3,
      borderColor: accent,
      backgroundColor: 'white',
    },
  });
};

export default getStyling;
