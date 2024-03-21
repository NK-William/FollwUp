import {StyleSheet} from 'react-native';
import {ITaskTrackLineProps} from './interface';
import {flatten} from '../../utils';
import {primary} from '../../constants/colors';

const getStyling = (props: ITaskTrackLineProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary,
        height: 48,
        width: 3,
      },
      props.containerStyle,
    ]),
  });
};

export default getStyling;
