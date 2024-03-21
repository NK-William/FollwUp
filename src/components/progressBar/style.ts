import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {IProgressBarProps} from './interface';
import {accent} from '../../constants/colors';

const getStyling = (props: IProgressBarProps, progressWidth: number) => {
  return StyleSheet.create({
    container: flatten([
      {
        height: 6,
        backgroundColor: 'white',
        borderRadius: 10,
      },
      props.containerStyle,
    ]),

    progress: {
      height: 6,
      backgroundColor: accent,
      borderRadius: 10,
      width: progressWidth,
    },
  });
};

export default getStyling;
