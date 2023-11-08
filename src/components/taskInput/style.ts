import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {ITaskInputProps} from './interface';

const getStyling = (props: ITaskInputProps) => {
  return StyleSheet.create({
    container: flatten([{}, props.containerStyle]),
  });
};

export default getStyling;
