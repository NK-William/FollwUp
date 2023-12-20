import {StyleSheet} from 'react-native';

const getStyling = () => {
  return StyleSheet.create({
    container: {},
    underlinedText: {alignSelf: 'center'},
    entryLabel: {
      marginHorizontal: 22,
      marginVertical: 10,
    },
    rightUnderlinedText: {
      textAlign: 'right',
      marginHorizontal: 22,
      fontSize: 16,
    },
    positiveButton: {
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 10,
      width: 160,
      height: 50,
    },
  });
};

export default getStyling;
