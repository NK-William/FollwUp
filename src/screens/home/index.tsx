import {View, Text, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {useHome} from './util';
import {
  ProgressBar,
  ProgressTaskName,
  TaskTabOption,
  TaskListItem,
} from '../../components';
import {fakeTasks} from '../../fakeJSON';
import {TaskTabOptionEnum} from '../../utils/enums';

const Home = () => {
  const styles = getStyling();
  const [selectedTabOption, setSelectedTabOption] = useState(
    TaskTabOptionEnum.Track,
  );
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
          <TaskTabOption
            text="Track"
            isSelected={selectedTabOption === TaskTabOptionEnum.Track}
            onPress={setSelectedTabOption}
            option={TaskTabOptionEnum.Track}
          />
          <TaskTabOption
            text="Edit"
            isSelected={selectedTabOption === TaskTabOptionEnum.Edit}
            onPress={setSelectedTabOption}
            option={TaskTabOptionEnum.Edit}
          />
        </View>
        <TaskListItem />
      </View>
    </View>
  );
};

export default Home;
