import {StyleSheet} from 'react-native';
import {accent, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 76,
    },
    rowIcon: {
      color: primary,
      marginLeft: 6,
    },
    taskNumberBadge: {position: 'absolute', left: '12%'},
    taskPhaseDetails: {position: 'absolute', right: 0},
    taskTrackLine: {
      alignSelf: 'center',
      marginTop: -11,
      marginBottom: -11,
      position: 'absolute',
      left: '19%',
    },
  });
};

export default getStyling;
