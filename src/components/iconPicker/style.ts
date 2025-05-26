import {StyleSheet} from 'react-native';
import {accent, darkText} from '../../constants/colors';
import {flatten} from '../../utils';
import {IIconPicker} from './interface';

const getStyling = (props: IIconPicker) => {
  return StyleSheet.create({
    container: flatten([{alignItems: 'center'}, props.containerStyle]),
    text: {color: darkText, fontWeight: 'bold'},
    icon: {color: accent},
    placeholderText: {marginTop: 6},
    popupContainer: {
      height: 250,
      width: 360,
      paddingHorizontal: 8,
    },
    popupInnerContainer: {
      borderRadius: 20,
      width: 300,
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 5,
      backgroundColor: '#F7F7F7',
    },
    closeIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 5,
    },
    iconPickerScrollView: {
      borderRadius: 20,
      width: 300,
      alignSelf: 'center',
      borderTopRightRadius: 0,
      backgroundColor: 'white',
    },
  });
};

export default getStyling;
