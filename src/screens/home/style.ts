import {StyleSheet} from 'react-native';
import {primary, gray, lightText, primaryLight} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    statsContainer: {
      flex: 1,
      backgroundColor: primary,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    },
    profilePlaceholderContainer: {
      height: 50,
      marginHorizontal: 8,
      marginTop: 8,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    profilePlaceholder: {
      height: 50,
      width: 50,
    },
    progressContainer: {
      marginTop: 23,
      marginHorizontal: 12,
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
      flex: 1,
    },
  });
};

export default getStyling;
