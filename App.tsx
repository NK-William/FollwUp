import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
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
import {
  home,
  login,
  register,
  profile,
  addTask,
  tasksToTrack,
  taskToTrackDetails,
  trackerTask,
  editorTask,
} from './src/constants/PageNames';
import {primary} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {accessTokenKey} from './src/constants/cacheKeys';
import {RestfulProvider} from 'restful-react';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={home}>
      <Stack.Screen
        options={{headerShown: false}}
        name={home}
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={profile}
        component={Profile}
      />
      <Stack.Screen name={addTask} component={AddTask} />
      <Stack.Screen name={tasksToTrack} component={TasksToTrack} />
      <Stack.Screen name={taskToTrackDetails} component={TaskToTrackDetails} />
      <Stack.Screen name={trackerTask} component={TrackerTask} />
      <Stack.Screen name={editorTask} component={EditorTask} />
      <Stack.Screen
        options={{headerShown: false}}
        name={login}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={register}
        component={Register}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={login}>
      <Stack.Screen
        options={{headerShown: false}}
        name={login}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={register}
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={home}
        component={Home}
      />
      <Stack.Screen name={profile} component={Profile} />
      <Stack.Screen name={addTask} component={AddTask} />
      <Stack.Screen name={tasksToTrack} component={TasksToTrack} />
      <Stack.Screen name={taskToTrackDetails} component={TaskToTrackDetails} />
      <Stack.Screen name={trackerTask} component={TrackerTask} />
      <Stack.Screen name={editorTask} component={EditorTask} />
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
    <>
      <RestfulProvider
        base="https://18a7-160-19-36-36.ngrok-free.app"
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
      <Toast />
    </>
  );
};

export default App;
