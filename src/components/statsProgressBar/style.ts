import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {IStatsProgressBarProps} from './interface';

const getStyling = (props: IStatsProgressBarProps) => {
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
