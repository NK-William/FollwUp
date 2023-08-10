import {ColorValue, StyleSheet} from 'react-native';
import {ITaskListItemProps} from './interface';
import {lightText, primary, accent, grayLight} from '../../constants/colors';
import {flatten} from '../../utils';

const getStyling = (
  props: ITaskListItemProps,
  statusViewColor: ColorValue,
  inviteLinkVisible: boolean,
) => {
  return StyleSheet.create({
    container: flatten([
      {
        backgroundColor: primary,
        height: 75,
        borderRadius: 10,
        padding: 8,
      },
      props.containerStyle,
    ]),
    taskInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    taskInfo: {},
    taskName: {color: lightText, fontWeight: 'bold', fontSize: 16},
    names: {color: inviteLinkVisible ? '#A9A9A9' : lightText},
    rightView: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    statusView: {
      backgroundColor: statusViewColor,
      borderRadius: 10,
      height: 27,
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
    },
    statusText: {color: grayLight, fontSize: 12},
    progressView: {
      height: 6,
      backgroundColor: 'white',
      marginTop: 4,
      borderRadius: 10,
    },
    progress: {
      height: 6,
      backgroundColor: accent,
      borderRadius: 10,
      width: '40%',
    },
  });
};

export default getStyling;
