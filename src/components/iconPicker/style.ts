import {StyleSheet} from 'react-native';
import {accent, darkText} from '../../constants/colors';
import {flatten} from '../../utils';
import {IIconPicker} from './interface';

const getStyling = (props: IIconPicker) => {
  return StyleSheet.create({
    container: flatten([{}, props.containerStyle]),
    text: {color: darkText, fontWeight: 'bold'},
    icon: {color: accent},
  });
};

export default getStyling;
