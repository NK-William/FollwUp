import {View, Text} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {ITask} from '../../interfaces';
import {AddTaskDetails, AddTaskPhaseDetails} from '../../containers';

const AddTask = () => {
  const [showTasPhaseContainer, setShowTaskPhaseContainer] = useState(true);
  const [task, setTask] = useState<ITask | undefined>(undefined);

  const styles = getStyling();

  // Task (pass setter, name, number and description) // Phase (pass setter,
  // and the last phase item props (name, icon and description))

  // ToDo: Work on TaskInput text input updater.
  return (
    <View style={styles.container}>
      {showTasPhaseContainer ? (
        <AddTaskPhaseDetails />
      ) : (
        <AddTaskDetails {...task} updateTask={setTask} />
      )}
    </View>
  );
};

export default AddTask;
