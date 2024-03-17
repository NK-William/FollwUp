import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {
  Login,
  Register,
  Home,
  Profile,
  AddTask,
  TasksToTrack,
  TaskToTrackDetails,
} from './src/screens';
import {primary} from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={primary} />
      <TaskToTrackDetails />
    </SafeAreaView>
  );
};

export default App;
