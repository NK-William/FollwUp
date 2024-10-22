import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import getStyling from './style';
import {useHome} from './util';
import {
  StatsProgressBar,
  ProgressTaskName,
  TaskTabOption,
  TaskListItem,
  ProfileButton,
  Icon,
} from '../../components';
import {fakeTasks} from '../../fakeJSON';
import {TaskTabOptionEnum} from '../../utils/enums';
import {OpicFiller} from '../../containers';
import LoaderKit from 'react-native-loader-kit';
import {primary} from '../../constants/colors';

const Home = () => {
  const styles = getStyling();
  const [selectedTabOption, setSelectedTabOption] = useState(
    TaskTabOptionEnum.Track,
  );
  const {progressBarTasks, tasks, loading} = useHome();

  const ContentPlaceholder = () => {
    return (
      <View style={styles.contentPlaceholderContainer}>
        <Text>You have no tasks added</Text>
      </View>
    );
  };

  const Content = () => {
    return (
      <>
        <View style={styles.statsContainer}>
          <View style={styles.profilePlaceholderContainer}>
            <ProfileButton />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>All Tasks Progress</Text>
            <StatsProgressBar
              progressTasks={progressBarTasks(tasks ?? [])}
              containerStyle={styles.progressBar}
            />
          </View>
          <View style={styles.progressTasksContainer}>
            <FlatList
              data={tasks}
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
              text="TASKS"
              isSelected={selectedTabOption === TaskTabOptionEnum.Track}
              onPress={setSelectedTabOption}
              option={TaskTabOptionEnum.Track}
              containerStyle={{width: '50%'}}
            />
            {/* Tracker option */}
            {/* <TaskTabOption
              text="Edit"
              isSelected={selectedTabOption === TaskTabOptionEnum.Edit}
              onPress={setSelectedTabOption}
              option={TaskTabOptionEnum.Edit}
            /> */}
          </View>
          <View style={styles.taskListContainer}>
            <FlatList
              data={tasks}
              renderItem={task => (
                <TaskListItem
                  isTracker={selectedTabOption === TaskTabOptionEnum.Track}
                  {...task.item}
                  containerStyle={styles.taskListItemContainer}
                />
              )}
              keyExtractor={task => task.id}
            />
            <View style={styles.floatingButtonContainer}>
              <TouchableOpacity style={styles.floatingButton}>
                <Icon
                  iconType="FontAwesome5"
                  iconName="plus"
                  size={18}
                  style={styles.addIcon}
                />
                {/* <View style={styles.innerFloatingButtonContainer}>
                  {selectedTabOption === TaskTabOptionEnum.Track ? (
                    <Image
                      source={require('../../assets/images/add.png')}
                      style={styles.addIcon}
                    />
                  ) : (
                    <Text style={styles.innerFloatingButtonText}>2</Text>
                  )}
                </View>
                <Image
                  source={require('../../assets/images/taskTrack.png')}
                  style={styles.floatingButtonIcon}
                /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  if (loading || !tasks)
    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.contentLoader}>
            <LoaderKit
              name={'BallClipRotatePulse'}
              color={primary}
              style={{width: 50, height: 50}}
            />
            <Text style={styles.loadingText}>Please wait</Text>
          </View>
        ) : (
          <ContentPlaceholder />
        )}
      </View>
    );

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
};

export default Home;
