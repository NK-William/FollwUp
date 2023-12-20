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
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    line: {
      height: 1.4,
      width: '60%',
      backgroundColor: primaryLight,
    },
  });
};

export default getStyling;
