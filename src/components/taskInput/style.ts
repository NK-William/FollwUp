import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {ITaskInputProps} from './interface';
import {darkText, grayLight, lightText} from '../../constants/colors';

const getStyling = (props: ITaskInputProps) => {
  return StyleSheet.create({
    container: flatten([{}, props.containerStyle]),
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      color: darkText,
      marginBottom: 6,
    },
    inputContainer: {
      height: props.multiline ? 190 : 50,
      justifyContent: 'center',
      backgroundColor: grayLight,
      borderRadius: 10,
    },
    input: {
      paddingHorizontal: 10,
      fontSize: 16,
      color: lightText,
      flex: 1,
      textAlignVertical: props.multiline ? 'top' : 'center',
    },
  });
};

export default getStyling;
