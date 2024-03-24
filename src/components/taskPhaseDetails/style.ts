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
        maxWidth: 250,
      },
      props.containerStyle,
    ]),
    title: flatten([
      {fontWeight: 'bold', fontSize: 14, color: darkText},
      props.textStyle,
    ]),
    description: flatten([
      {fontSize: 14, color: darkText, marginTop: 5},
      props.textStyle,
    ]),
  });
};

export default getStyling;
