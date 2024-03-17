import {StyleSheet} from 'react-native';
import {primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 20,
    },
    underlinedText: {alignSelf: 'center', paddingHorizontal: 22},
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 22,
    },
    button: {width: 240, alignSelf: 'center'},
    flatList: {marginTop: 45, marginBottom: 90, paddingHorizontal: 22},
    listItemContainer: {
      backgroundColor: primary,
      height: 82,
      borderRadius: 10,
      justifyContent: 'center',
      paddingHorizontal: 15,
      marginVertical: 2,
    },
    listItemTitle: {
      color: 'white',
      marginBottom: 4,
      fontSize: 18,
      fontWeight: '800',
    },
    listItemSubText: {color: 'white', fontSize: 16},
  });
};

export default getStyling;
