import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskStatsHeader} from './interface';
import {ProgressBar, FollwUpButton, ProfileButton, BackButton} from '..';
import {useTaskStatsHeader} from './utils';

const TaskStatsHeader: FC<ITaskStatsHeader> = props => {
  const {notLinked, title, currentPhase, PhasesSum, CompletionDate} = props;

  const {getFormattedDate, getPercentageValue} = useTaskStatsHeader(
    CompletionDate,
    currentPhase,
    PhasesSum,
  );
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        <BackButton />
        <ProfileButton />
      </View>
      <Text style={styles.title}>{title}</Text>
      {notLinked ? (
        <View>
          <Text style={styles.phasesTrackText}>Link has been declined</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <FollwUpButton
              text="Request link"
              containerStyle={{
                ...styles.positiveButton,
                ...styles.RequestLinkButton,
              }}
              textStyle={styles.positiveButtonText}
            />
            <FollwUpButton
              text="Remove task"
              containerStyle={{
                ...styles.positiveButton,
                ...styles.RemoveTaskButton,
              }}
              textStyle={styles.positiveButtonText}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.phasesTrackText}>
            {`${currentPhase} of ${PhasesSum} phases completed`}
          </Text>
          <Text style={styles.estimationText}>
            {`Estimated completion time is ${getFormattedDate()}`}
            {/* {`Estimated completion time is 12 July 2023`} */}
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <ProgressBar
              progressToHundred={getPercentageValue()}
              containerStyle={styles.progressBar}
            />
            <FollwUpButton
              text="Link"
              containerStyle={styles.positiveButton}
              textStyle={styles.positiveButtonText}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default TaskStatsHeader;
