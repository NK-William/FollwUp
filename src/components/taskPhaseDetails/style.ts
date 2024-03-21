import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {accent, darkText, grayLight} from '../../constants/colors';
import {ITaskPhaseDetailsProps} from './interface';

const getStyling = (props: ITaskPhaseDetailsProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        backgroundColor: grayLight,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: accent,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14,
        maxWidth: 160,
      },
      props.containerStyle,
    ]),
    title: {fontWeight: 'bold', fontSize: 14, color: darkText},
    description: {fontSize: 14, color: darkText, marginTop: 5},
  });
};

export default getStyling;
