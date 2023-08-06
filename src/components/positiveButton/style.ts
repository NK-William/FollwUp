import {StyleSheet} from 'react-native';
import {primary, primaryButtonText} from '../../constants/colors';
import type {IPositiveButtonProps} from './interface';
import {flatten} from '../../utils';

const getStyling = (props: IPositiveButtonProps) => {
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
