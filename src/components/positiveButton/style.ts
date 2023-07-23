import {StyleSheet} from 'react-native';
import {primary, primaryButtonText} from '../../constants/colors';
import type {PositiveButtonProps} from './interface';
import {flatten} from '../../utils';

const getStyling = (props: PositiveButtonProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        height: 58,
        width: 201,
        backgroundColor: primary,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      props.containerStyle,
    ]),
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: primaryButtonText,
    },
  });
};

export default getStyling;
