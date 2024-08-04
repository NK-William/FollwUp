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
  TrackerTask,
  EditorTask,
} from './src/screens';
import {primary} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="TasksToTrack" component={TasksToTrack} />
      <Stack.Screen name="TaskToTrackDetails" component={TaskToTrackDetails} />
      <Stack.Screen name="TrackerTask" component={TrackerTask} />
      <Stack.Screen name="EditorTask" component={EditorTask} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

let accessToken = false;

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={primary} />
        {accessToken ? <MainStack /> : <AuthStack />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
