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
import {TaskTabOptionEnum} from '../../utils/enums';
import {OpicFiller} from '../../containers';
import LoaderKit from 'react-native-loader-kit';
import {primary} from '../../constants/colors';
import {addTask} from '../../constants/pageNames';

const Home = (props: any) => {
  const {navigation} = props;

  const styles = getStyling();
  const [selectedTabOption, setSelectedTabOption] = useState(
    TaskTabOptionEnum.Track,
  );
  const {tasks, tasksDefined, loading, progressBarTasks, taskItemSelected} =
    useHome(navigation);

  const StatsContentPlaceholder = () => {
    return (
      <View style={styles.statsContentPlaceholderContainer}>
        <Text style={styles.emptyInstructionHeaderText}>
          Stats will display here when you have tasks
        </Text>
        <Text style={styles.emptyInstructionText}>
          Please press <Text style={styles.plusCharacter}> + </Text>
          button to add a new task
        </Text>
      </View>
    );
  };

  const TasksContentPlaceholder = () => (
    <View style={styles.tasksContentPlaceholder}>
      <Image
        source={require('../../assets/images/emptyBox.png')}
        // style={styles.profilePlaceholder}
      />
    </View>
  );

  const Content = () => {
    return (
      <>
        <View style={styles.statsContainer}>
          <ProfileButton />
          {tasksDefined ? (
            <View>
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
          ) : (
            <StatsContentPlaceholder />
          )}
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
                  OnSelected={taskItemSelected}
                  isTracker={selectedTabOption === TaskTabOptionEnum.Track}
                  task={task.item}
                  containerStyle={styles.taskListItemContainer}
                />
              )}
              keyExtractor={task => task.id}
              ListEmptyComponent={TasksContentPlaceholder}
            />
            <View style={styles.floatingButtonContainer}>
              <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate(addTask)}>
                <Icon
                  iconType="FontAwesome5"
                  iconName="plus"
                  size={18}
                  style={styles.addIcon}
                />
                {/* Tracker/Editor version */}
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

  // if (loading || !tasks)
  //   return (
  //     <View style={styles.container}>
  //       {loading ? (
  //         <View style={styles.contentLoader}>
  //           <LoaderKit
  //             name={'BallClipRotatePulse'}
  //             color={primary}
  //             style={{width: 50, height: 50}}
  //           />
  //           <Text style={styles.loadingText}>Please wait</Text>
  //         </View>
  //       ) : (
  //         <ContentPlaceholder />
  //       )}
  //     </View>
  //   );

  if (loading)
    return (
      <View style={styles.container}>
        <View style={styles.contentLoader}>
          <LoaderKit
            name={'BallClipRotatePulse'}
            color={primary}
            style={{width: 50, height: 50}}
          />
          <Text style={styles.loadingText}>Please wait</Text>
        </View>
      </View>
    );

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
        <Content />
      )}
    </View>
  );
};

export default Home;
