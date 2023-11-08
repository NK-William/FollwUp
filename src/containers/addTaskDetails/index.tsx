import {View, Text} from 'react-native';
import React from 'react';
import {UnderlinedText} from '../../components';
import getStyling from './style';

const AddTaskDetails = () => {
  const styles = getStyling();
  return (
    <View>
      <UnderlinedText text="Task" containerStyle={styles.underlinedText} />
    </View>
  );
};

export default AddTaskDetails;
