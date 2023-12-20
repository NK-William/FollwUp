import {StyleSheet} from 'react-native';
import {primary, primaryButtonText} from '../../constants/colors';
import type {IFollwUpButtonProps} from './interface';
import {flatten} from '../../utils';

const getStyling = (props: IFollwUpButtonProps) => {
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
    text: flatten([
      {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryButtonText,
      },
      props.textStyle,
    ]),
  });
};

export default getStyling;
