import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {IPressableTextProps} from './interface';

const PressableText: FC<IPressableTextProps> = props => {
  const styles = getStyling(props);
  const {text, onPress} = props;
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PressableText;
