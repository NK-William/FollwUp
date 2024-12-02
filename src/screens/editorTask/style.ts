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
      justifyContent: 'center',
    },
    rowIcon: {
      color: primary,
      transform: [{translateX: -33}],
    },
    taskNumberBadge: {transform: [{translateX: -25}]},
    taskPhaseDetails: {
      position: 'absolute',
      right: 0,
      maxWidth: 145,
    },
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
    modalContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      flex: 1,
    },
    phaseDetailsModalContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      flex: 1,
    },
    phaseEditModalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      height: 50,
    },
    phaseEditModalInnerContainer: {
      backgroundColor: 'white',
      height: '70%',
      width: '95%',
      borderRadius: 10,
    },
  });
};

export default getStyling;
