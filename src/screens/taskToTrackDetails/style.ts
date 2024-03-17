import {StyleSheet} from 'react-native';
import {accent, darkText, grayLight} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 20,
      paddingHorizontal: 22,
    },
    negativeButtonText: {
      color: accent,
    },
    negativeUpButton: {
      marginTop: 12,
      width: 160,
      height: 50,
      borderWidth: 3,
      borderColor: accent,
      backgroundColor: 'white',
    },
    positiveUpButton: {
      marginTop: 25,
      width: 160,
      height: 50,
    },
    detailsTitle: {
      fontSize: 18,
      fontWeight: '800',
      color: darkText,
      marginBottom: 5,
    },
    detailsSubText: {fontSize: 16, color: darkText},
    detailsTextContainer: {
      backgroundColor: grayLight,
      minHeight: 160,
      padding: 8,
      borderRadius: 10,
    },
  });
};

export default getStyling;
