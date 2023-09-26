import {StyleSheet} from 'react-native';
import {primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    backArrowContainer: {
      backgroundColor: 'white',
      position: 'absolute',
      height: 40,
      width: 40,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      top: 12,
      left: 12,
    },

    cameraIconContainer: {
      backgroundColor: 'white',
      position: 'absolute',
      height: 40,
      width: 40,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      top: 62,
      left: 12,
    },
    profilePicContainer: {flex: 4},
    profileInfoCardContainer: {
      flex: 2,
    },
    profilePic: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    icon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    profileInfoCard: {
      backgroundColor: primary,
      height: '150%',
      marginHorizontal: 20,
      marginTop: -150,
      paddingHorizontal: 16,
      paddingVertical: 20,
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
    ProfileInputContainer: {marginTop: 20},
  });
};

export default getStyling;
