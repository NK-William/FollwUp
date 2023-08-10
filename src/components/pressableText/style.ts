import {StyleSheet} from 'react-native';
import {primary} from '../../constants/colors';
import {flatten} from '../../utils';
import {IPressableTextProps} from './interface';

const getStyling = (props: IPressableTextProps) => {
  return StyleSheet.create({
    text: flatten([
      {
        fontWeight: 'bold',
        color: props.color ?? primary,
        fontSize: 15,
      },
      props.textStyle,
    ]),
  });
};

export default getStyling;
