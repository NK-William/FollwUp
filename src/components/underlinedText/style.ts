import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {IUnderlinedTextProps} from './interface';
import {darkText, gray, grayLight, primaryLight} from '../../constants/colors';

const getStyling = (props: IUnderlinedTextProps) => {
  return StyleSheet.create({
    container: flatten([
      {alignItems: 'center', width: '100%'},
      props.containerStyle,
    ]),
    text: {
      color: darkText,
      fontSize: 32,
      fontWeight: 'bold',
    },
    line: {
      height: 1.5,
      width: '80%',
      backgroundColor: grayLight,
    },
  });
};

export default getStyling;
