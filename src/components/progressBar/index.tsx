import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {IProgressBarProps} from './interface';
import {useProgressBar} from './util';

const ProgressBar: FC<IProgressBarProps> = props => {
  const {progressWidth, handleLayout} = useProgressBar(props);
  const styles = getStyling(props, progressWidth);
  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.progress} />
    </View>
  );
};

export default ProgressBar;
