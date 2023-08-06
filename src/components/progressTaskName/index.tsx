import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import type {IProgressTaskNameProps} from './interface';
import getStyling from './style';
import {useProgressTaskName} from './util';

const ProgressTaskName: FC<IProgressTaskNameProps> = props => {
  const {letters} = useProgressTaskName(props);
  const styles = getStyling(props);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.nameCapsLetters}>{letters}</Text>
      </View>
      <Text style={styles.taskName}>{props.name}</Text>
    </View>
  );
};

export default ProgressTaskName;
