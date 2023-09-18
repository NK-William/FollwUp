import {StyleSheet} from 'react-native';

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
    profilePicContainer: {flex: 4},
    profileInfoCardContainer: {
      flex: 2,
    },
    profilePic: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    backArrowIcon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    profileInfoCard: {
      backgroundColor: '#E6E6E6',
      height: '105%',
      marginHorizontal: 20,
      marginTop: -45,
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
  });
};

export default getStyling;
