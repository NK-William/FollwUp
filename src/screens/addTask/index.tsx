import {View, Text} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {AddTaskDetails, AddTaskPhaseDetails} from '../../containers';

const AddTask = () => {
  const [showTasPhaseContainer, setShowTaskPhaseContainer] = useState(true);
  const styles = getStyling();
  return (
    <View style={styles.container}>
      {showTasPhaseContainer ? <AddTaskPhaseDetails /> : <AddTaskDetails />}
    </View>
  );
};

export default AddTask;
