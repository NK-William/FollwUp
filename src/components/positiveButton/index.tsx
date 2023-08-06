import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import type {IPositiveButtonProps} from './interface';

const PositiveButton: FC<IPositiveButtonProps> = props => {
  const styles = getStyling(props);
  const {text, onPress} = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PositiveButton;
