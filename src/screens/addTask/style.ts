import {StyleSheet} from 'react-native';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 20,
    },
    popupContainer: {
      height: 250,
      width: 300,
      borderRadius: 50,
    },
    popupInnerContainer: {
      borderRadius: 20,
      width: 300,
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 5,
    },
    closeIconContainer: {
      backgroundColor: 'white',
      width: 40,
      height: 30,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 5,
    },
    iconPickerScrollView: {
      borderRadius: 20,
      borderTopRightRadius: 0,
      backgroundColor: 'white',
    },
  });
};

export default getStyling;
