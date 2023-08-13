import {View, LayoutChangeEvent} from 'react-native';
import React, {FC, useState} from 'react';
import getStyling from './style';
import type {IProgressBarProps} from './interface';
import {useProgressBar} from './util';

const ProgressBar: FC<IProgressBarProps> = props => {
  const {handleLayout, mutatedTasks} = useProgressBar(props);
  const styles = getStyling(props);
  return (
    <View onLayout={handleLayout} style={styles.container}>
      {mutatedTasks.map((task, index) => {
        return (
          <View
            key={index}
            style={{
              borderBottomLeftRadius: index === 0 ? 10 : 0,
              borderTopLeftRadius: index === 0 ? 10 : 0,
              borderBottomRightRadius:
                index === mutatedTasks.length - 1 ? 10 : 0,
              borderTopRightRadius: index === mutatedTasks.length - 1 ? 10 : 0,
              backgroundColor: task.color,
              width: task.width,
              height: 15,
            }}
          />
        );
      })}
    </View>
  );
};

export default ProgressBar;
