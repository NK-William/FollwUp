import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {IProgressBarProps} from './interface';

const getStyling = (props: IProgressBarProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        backgroundColor: 'white',
        height: 15,
        borderRadius: 10,
        flexDirection: 'row',
      },
      props.containerStyle,
    ]),
  });
};

export default getStyling;
