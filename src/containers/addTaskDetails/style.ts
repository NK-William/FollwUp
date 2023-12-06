import {StyleSheet} from 'react-native';

const getStyling = () => {
  return StyleSheet.create({
    container: {},
    underlinedText: {alignSelf: 'center', marginTop: 16},
    entryLabel: {
      marginHorizontal: 22,
      marginVertical: 10,
    },
  });
};

export default getStyling;
