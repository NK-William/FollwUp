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
} from './src/constants/pageNames';
import {primary} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RestfulProvider} from 'restful-react';
import Toast from 'react-native-toast-message';
import {loadUser, selectUser} from './src/redux/features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {IReduxUser} from './src/interfaces';

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
      <Stack.Screen
        options={{headerShown: false}}
        name={addTask}
        component={AddTask}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={tasksToTrack}
        component={TasksToTrack}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={taskToTrackDetails}
        component={TaskToTrackDetails}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={trackerTask}
        component={TrackerTask}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={editorTask}
        component={EditorTask}
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
    </Stack.Navigator>
  );
};

const App = () => {
  // redux
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [cacheLoaded, setCacheLoaded] = useState(false);
  // const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    dispatch(loadUser());
    // setTimeout(() => {
    //   AsyncStorage.getItem(accessTokenKey)
    //     .then((token: string | null) => {
    //       if (token) {
    //         setAccessToken(token);
    //       }
    //       setCacheLoaded(true);
    //     })
    //     .catch(() => {
    //       setCacheLoaded(true);
    //     });
    // }, 3000);
  }, [dispatch]);

  // if (!cacheLoaded) {
  //   return <Splash />;
  // }

  const userObj: IReduxUser = JSON.parse(JSON.stringify(user));
  const accessToken = userObj?.accessToken;

  return (
    <>
      <RestfulProvider
        base="https://9e28-160-19-36-36.ngrok-free.app"
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
