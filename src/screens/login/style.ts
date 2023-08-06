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
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 35,
    },
    image: {width: 200, height: 200},
    titleContainer: {
      width: '100%',
      paddingHorizontal: 22,
      marginTop: 30,
      marginBottom: 16,
    },
    title: {fontSize: 35, fontWeight: '600', color: lightText},
    line: {width: 160, height: 1, backgroundColor: primaryLight, marginTop: 4},
    buttonActionsContainer: {
      flex: 1.1,
      justifyContent: 'space-between',
    },
    buttonTextContainer: {
      marginTop: 30,
      alignItems: 'center',
    },
    forgotPasswordText: {
      marginTop: 6,
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
