import {StyleSheet} from 'react-native';
import {primaryLight, lightText} from '../../constants/colors';
import {flatten} from '../../utils';
import {IStyleProps} from './interface';

const getStyling = ({containerStyle, focused}: IStyleProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        flexDirection: 'row',
        backgroundColor: focused ? primaryLight : 'transparent',
        width: '100%',
        height: 70,
        borderRadius: 28,
        paddingHorizontal: 22,
        paddingTop: 4,
        paddingBottom: 16,
      },
      containerStyle,
    ]),
    icon: {alignSelf: 'flex-end', marginBottom: focused ? 4 : 10},
    textInput: {
      justifyContent: 'space-between',
      flex: 1,
      paddingLeft: 10,
    },
    text: {
      color: lightText,
      fontSize: 13,
      marginTop: focused ? 0 : 20,
    },
    input: {
      padding: 0,
      fontSize: 18,
      color: lightText,
      fontWeight: 'bold',
      flex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      display: focused ? 'flex' : 'none',
    },
  });
};

export default getStyling;
