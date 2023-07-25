import {StyleSheet} from 'react-native';
import {primary, gray, lightText, primaryLight} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    formContainer: {
      flex: 3,
      backgroundColor: primary,
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 50,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 35,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 35,
    },
    image: {width: 90, height: 90},
    titleContainer: {
      paddingHorizontal: 22,
      flex: 1,
    },
    title: {fontSize: 35, fontWeight: '600', color: lightText},
    line: {width: 160, height: 1, backgroundColor: primaryLight, marginTop: 4},
    buttonActionsContainer: {
      flex: 1.1,
      justifyContent: 'space-between',
    },
    buttonTextContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    footerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 15,
    },
    footerText: {
      color: gray,
    },
    emailAuthInput: {
      marginBottom: 8,
    },
    passwordAuthInput: {
      marginBottom: 30,
    },
  });
};

export default getStyling;
