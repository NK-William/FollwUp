import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {lightText} from '../../constants/colors';

const getStyling = (props: any) => {
  return StyleSheet.create({
    container: flatten([
      {
        flexDirection: 'row',
        marginHorizontal: 14,
        alignItems: 'center',
      },
      props.containerStyle,
    ]),
    circle: {
      height: 30,
      width: 35,
      borderRadius: 40,
      backgroundColor: props.color,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {width: 25, height: 26},
    inviteContainer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    nameCapsLetters: {
      fontSize: 10,
      color: lightText,
      fontWeight: 'bold',
    },
    taskName: {color: lightText, marginHorizontal: 8, fontSize: 16},
  });
};

export default getStyling;
