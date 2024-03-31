import {StyleSheet} from 'react-native';
import {accent, lightText, primary} from '../../constants/colors';

const getStyling = () => {
  return StyleSheet.create({
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
    rowIcon: {
      color: primary,
      transform: [{translateX: -33}],
    },
    taskNumberBadge: {transform: [{translateX: -25}]},
    taskPhaseDetails: {position: 'absolute', right: 0, maxWidth: 145},
    taskTrackLine: {
      alignSelf: 'center',
      marginTop: -11,
      marginBottom: -11,
      transform: [{translateX: -10}],
    },
  });
};

export default getStyling;
