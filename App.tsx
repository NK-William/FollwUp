import React, {useEffect, useState} from 'react';
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
  Splash,
} from './src/screens';
import {primary} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {accessTokenKey} from './src/constants/cacheKeys';
import {RestfulProvider} from 'restful-react';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
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

const App = () => {
  const [cacheLoaded, setCacheLoaded] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem(accessTokenKey)
        .then((token: string | null) => {
          if (token) {
            setAccessToken(token);
          }
          setCacheLoaded(true);
        })
        .catch(() => {
          setCacheLoaded(true);
        });
    }, 3000);
  }, []);

  if (!cacheLoaded) {
    return <Splash />;
  }

  return (
    <RestfulProvider
      base="https://d57f-160-19-36-36.ngrok-free.app"
      requestOptions={() => ({
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      })}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor={primary} />
          {accessToken ? <MainStack /> : <AuthStack />}
        </SafeAreaView>
      </NavigationContainer>
    </RestfulProvider>
  );
};

export default App;
