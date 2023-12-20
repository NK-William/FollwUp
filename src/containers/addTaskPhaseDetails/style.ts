import {StyleSheet} from 'react-native';
import {accent} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {},
    underlinedText: {alignSelf: 'center'},
    entryLabel: {
      marginHorizontal: 22,
      marginVertical: 10,
    },
    iconPicker: {
      alignItems: 'center',
      marginVertical: 16,
    },
    pressableTextContainer: {
      marginHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    pressableText: {
      fontSize: 16,
    },
    follwUpPositiveButton: {
      alignSelf: 'center',
      marginTop: 40,
      marginBottom: 10,
      width: 160,
      height: 50,
    },
    follwUpNegativeButton: {
      alignSelf: 'center',
      marginBottom: 10,
      width: 160,
      height: 50,
      borderWidth: 3,
      borderColor: accent,
      backgroundColor: 'white',
    },
    follwUpNegativeButtonText: {
      color: accent,
    },
  });
};

export default getStyling;
