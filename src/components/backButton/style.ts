import {StyleSheet} from 'react-native';
import {primary} from '../../constants/colors';
import {flatten} from '../../utils';
import {IBackButton} from './interface';

const getStyling = (props: IBackButton) => {
  return StyleSheet.create({
    container: flatten([
      {
        backgroundColor: primary,
        height: 50,
        width: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      props.containerStyle,
    ]),
  });
};

export default getStyling;
