import {StyleSheet} from 'react-native';
import {
  accent,
  grayLight,
  lightText,
  primaryLight,
} from '../../constants/colors';
import {flatten} from '../../utils';
import {IProfileInputProps} from './interface';

const getStyling = (props: IProfileInputProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        flexDirection: 'row',
        alignItems: 'center',
      },
      props.containerStyle,
    ]),

    penIcon: {color: 'white'},
    title: {color: grayLight, fontSize: 13},
    inputContainer: {flex: 1, marginHorizontal: 16},
    inputLine: {height: 0.5, backgroundColor: primaryLight},
    input: {
      paddingVertical: 1,
      paddingHorizontal: 0,
      fontSize: 18,
      color: lightText,
      fontWeight: 'bold',
    },
  });
};

export default getStyling;
