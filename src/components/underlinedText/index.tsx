import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {IUnderlinedTextProps} from './interface';
import getStyling from './style';

const UnderlinedText: FC<IUnderlinedTextProps> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default UnderlinedText;
