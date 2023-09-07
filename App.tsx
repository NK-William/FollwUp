import React from 'react';
import {View, Text} from 'react-native';
import {Login, Register, Home, Profile} from './src/screens';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Profile />
    </View>
  );
};

export default App;
