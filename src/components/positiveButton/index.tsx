import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import type {PositiveButtonProps} from './interface';

const PositiveButton: FC<PositiveButtonProps> = props => {
  const styles = getStyling(props);
  const {text, onPress} = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PositiveButton;
