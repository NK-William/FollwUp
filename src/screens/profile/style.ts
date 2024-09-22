import {StyleSheet} from 'react-native';
import {primary, primaryLight} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    backArrowContainer: {
      position: 'absolute',
      top: 12,
      left: 12,
    },
    logoutIconContainer: {
      backgroundColor: primary,
      position: 'absolute',
      height: 50,
      width: 50,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      top: 70,
      left: 12,
    },

    // cameraIconContainer: {
    //   backgroundColor: primary,
    //   position: 'absolute',
    //   height: 50,
    //   width: 50,
    //   borderRadius: 30,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   top: 70,
    //   left: 12,
    // },
    profileIconContainer: {
      flex: 4,
      backgroundColor: primaryLight,
      alignItems: 'center',
    },
    profileInfoCardContainer: {
      flex: 2,
    },
    profileIcon: {
      height: 250,
      resizeMode: 'contain',
      marginTop: 80,
    },
    icon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    profileInfoCard: {
      backgroundColor: primary,
      marginHorizontal: 20,
      marginTop: -150,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 5,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    scrollView: {
      paddingHorizontal: 16,
      borderRadius: 20,
    },
    ProfileInputContainer: {marginTop: 20},
    // popupContainer: {
    //   alignItems: 'center',
    //   borderRadius: 20,
    //   height: 200,
    //   width: 300,
    //   backgroundColor: 'white',
    // },
    // optionButtonContainer: {
    //   flex: 1,
    //   marginTop: 16,
    //   justifyContent: 'center',
    // },
  });
};

export default getStyling;
