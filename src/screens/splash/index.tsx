import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';

const Splash = () => {
  const styles = getStyling();
  return (
    <View style={{backgroundColor: 'blue'}}>
      <Text style={{color: 'white', fontSize: 24}}>Splash</Text>
    </View>
  );
};

export default Splash;
