import {StyleSheet} from 'react-native';
import {accent, light} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    innerContainer: {
      backgroundColor: light,
      height: '70%',
      justifyContent: 'space-between',
      width: '95%',
      paddingHorizontal: 8,
      paddingVertical: 20,
      borderRadius: 10,
    },
    underlinedText: {
      marginBottom: 20,
    },
    entry: {
      marginVertical: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    positiveButtonText: {
      color: accent,
    },
    positiveButton: {
      flex: 1,
      borderWidth: 3,
      borderColor: accent,
      backgroundColor: light,
    },
    negativeButton: {
      flex: 1,
    },
  });
};

export default getStyling;
