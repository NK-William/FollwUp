import {StyleSheet} from 'react-native';
import {primary, accent, lightText, primaryLight} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
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
    profilePlaceholder: {
      height: 50,
      width: 50,
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
      paddingHorizontal: 12,
      flex: 1,
    },
    tabContainer: {
      marginTop: 20,
      flexDirection: 'row',
    },
  });
};

export default getStyling;
