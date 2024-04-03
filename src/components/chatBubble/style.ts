import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {accent, darkText} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: flatten([
      {
        flexWrap: 'wrap',
        paddingHorizontal: 4,
        paddingVertical: 7,
      },
    ]),
    senderContainer: {
      backgroundColor: accent,
      alignSelf: 'flex-end',
      maxWidth: '70%',
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: 30,
      borderBottomLeftRadius: 0,
    },
    text: {
      color: darkText,
    },
  });
};

export default getStyling;
