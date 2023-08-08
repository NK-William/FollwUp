import {View, Text, Image, FlatList, ColorValue} from 'react-native';
import React from 'react';
import getStyling from './style';
import {useHome} from './util';
import {ProgressBar, ProgressTaskName, TaskTabOption} from '../../components';
import {fakeTasks} from '../../fakeJSON';

const Home = () => {
  const styles = getStyling();
  const {progressBarTasks} = useHome();

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.profilePlaceholderContainer}>
          <Image
            source={require('../../assets/images/profilePlaceholder.png')}
            style={styles.profilePlaceholder}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>All Tasks Progress</Text>
          <ProgressBar
            progressTasks={progressBarTasks(fakeTasks)}
            containerStyle={styles.progressBar}
          />
        </View>
        <View style={styles.progressTasksContainer}>
          <FlatList
            data={fakeTasks}
            renderItem={task => (
              <ProgressTaskName
                {...task.item}
                containerStyle={styles.progressTaskNameContainer}
              />
            )}
            keyExtractor={task => task.id}
          />
        </View>
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.tabContainer}>
          <TaskTabOption />
          <TaskTabOption />
        </View>
      </View>
    </View>
  );
};

export default Home;
