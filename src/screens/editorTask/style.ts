import {StyleSheet} from 'react-native';
import {accent, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 76,
    },
    actionIconContainer: {
      position: 'absolute',
      left: 8,
      flexDirection: 'row',
    },
    actionIcon: {
      color: accent,
    },
    chatIcon: {
      color: primary,
    },
    chatIconContainer: {
      height: 60,
      alignItems: 'center',
      backgroundColor: 'transparent',
      justifyContent: 'center',
    },
    rowIcon: {
      color: primary,
      transform: [{translateX: -33}],
    },
    taskNumberBadge: {transform: [{translateX: -25}]},
    taskPhaseDetails: {position: 'absolute', right: 0, maxWidth: 145},
    taskTrackLine: {},
    trackContainer: {
      height: 48,
      minWidth: 20,
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: -11,
      marginBottom: -11,
      transform: [{translateX: 8}],
    },
  });
};

export default getStyling;
