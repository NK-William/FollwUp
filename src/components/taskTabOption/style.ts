import {StyleSheet} from 'react-native';
import {accent} from '../../constants/colors';
import {ITaskTabOptionProps} from './interface';
import {flatten} from '../../utils';

const getStyling = (props: ITaskTabOptionProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        flex: 1,
        alignItems: 'center',
      },
      props.containerStyle,
    ]),
    text: {color: '#B4B4B4', fontWeight: 'bold', fontSize: 16},
    line: {height: 1.2, width: '100%', backgroundColor: accent},
  });
};

export default getStyling;
