import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskStatsHeader} from './interface';
import {ProgressBar, FollwUpButton} from '..';

const TaskStatsHeader: FC<ITaskStatsHeader> = props => {
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/profilePlaceholder.png')}
        style={styles.profilePlaceholder}
      />
      <Text style={styles.title}>Engine rebuild</Text>
      <Text style={styles.phasesTrackText}>3 of 5 phases completed</Text>
      <Text style={styles.estimationText}>
        Estimated completion time is 12 July 2023
      </Text>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <ProgressBar
          progressToHundred={70}
          containerStyle={styles.progressBar}
        />
        <FollwUpButton
          text="View reference"
          containerStyle={styles.positiveButton}
          textStyle={styles.positiveButtonText}
        />
      </View>
    </View>
  );
};

export default TaskStatsHeader;
