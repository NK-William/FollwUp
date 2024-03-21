import {StyleSheet} from 'react-native';
import {primary} from '../../constants/colors';
import {ITaskNumberBadgeProps} from './interface';
import {flatten} from '../../utils';

const getStyling = (props: ITaskNumberBadgeProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        width: 55,
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary,
      },
      props.containerStyle,
    ]),

    number: flatten([
      {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
      },
      props.numberStyle,
    ]),
  });
};

export default getStyling;
