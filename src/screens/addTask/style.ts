import {StyleSheet} from 'react-native';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    rightUnderlinedText: {
      textAlign: 'right',
      marginHorizontal: 22,
      fontSize: 16,
    },
    positiveButton: {alignSelf: 'center', marginTop: 30, marginBottom: 10},
  });
};

export default getStyling;
