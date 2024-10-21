import {StyleSheet} from 'react-native';
import {accent} from '../../constants/colors';
import {ITaskTabOptionProps} from './interface';
import {flatten} from '../../utils';

const getStyling = (props: ITaskTabOptionProps) => {
  const {isSelected} = props;
  return StyleSheet.create({
    container: flatten([
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      props.containerStyle,
    ]),
    text: {
      color: isSelected ? accent : '#B4B4B4',
      fontWeight: 'bold',
      fontSize: 16,
    },
    line: {
      height: isSelected ? 2.5 : 1,
      // width: '100%', {/* Tracker option */}
      width: '50%',
      backgroundColor: isSelected ? accent : '#B4B4B4',
    },
  });
};

export default getStyling;
