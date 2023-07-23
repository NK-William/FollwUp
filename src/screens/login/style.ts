import {StyleSheet} from 'react-native';
import {primary, gray, primaryButtonText} from '../../constants/colors';

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
