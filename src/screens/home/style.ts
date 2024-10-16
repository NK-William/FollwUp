import {StyleSheet} from 'react-native';
import {accent, darkText, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    contentPlaceholderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentLoader: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    loadingText: {
      marginTop: 8,
      color: darkText,
    },
    statsContainer: {
      paddingHorizontal: 12,
      flex: 1,
      backgroundColor: primary,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    },
    profilePlaceholderContainer: {
      height: 50,
      marginTop: 8,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    progressContainer: {
      marginTop: 23,
    },
    progressText: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: lightText,
    },
    progressBar: {
      marginTop: 8,
    },
    progressTasksContainer: {
      marginTop: 23,
      marginBottom: 30,
      flex: 1,
    },
    progressTaskNameContainer: {
      marginTop: 8,
    },
    tasksContainer: {
      flex: 1.2,
      marginTop: 1,
    },
    tabContainer: {
      paddingHorizontal: 12,
      marginTop: 20,
      flexDirection: 'row',
    },
    taskListContainer: {
      flex: 1,
      marginTop: 10,
    },
    taskListItemContainer: {
      marginBottom: 6,
      marginHorizontal: 12,
      marginTop: 6,
    },
    floatingButtonContainer: {
      position: 'absolute',
      bottom: 0,
      padding: 8,
      right: 0,
    },
    floatingButton: {
      backgroundColor: accent,
      height: 60,
      width: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    floatingButtonIcon: {
      height: 40,
      width: 40,
    },
    innerFloatingButtonContainer: {
      height: 20,
      width: 20,
      position: 'absolute',
      left: 5,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3,
    },
    innerFloatingButtonText: {
      color: lightText,
      fontWeight: 'bold',
      fontSize: 15,
    },
    addIcon: {
      height: 20,
      width: 20,
      marginRight: -5,
    },
  });
};

export default getStyling;
