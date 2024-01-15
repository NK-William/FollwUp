import {View, Text} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {ITask} from '../../interfaces';
import {AddTaskDetails, AddTaskPhaseDetails} from '../../containers';
import {TaskFormFieldEnum, taskStatus} from '../../utils/enums';

const taskInit: ITask = {
  name: '',
  clientPhoneNumber: '',
  description: '',
  phases: [],
  status: taskStatus.Pending,
};

const AddTask = () => {
  const [showTasPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);

  const styles = getStyling();

  const updateTaskFormDetails = (value: string, field: TaskFormFieldEnum) => {
    switch (field) {
      case TaskFormFieldEnum.name:
        setTask({...task, name: value});
        break;
      case TaskFormFieldEnum.phoneNumber:
        if (task) setTask({...task, clientPhoneNumber: value});
        break;
      case TaskFormFieldEnum.description:
        if (task) setTask({...task, description: value});
        break;
      default:
        if (task) setTask(task);
    }
  };

  // Task (pass setter, name, number and description) // Phase (pass setter,
  // and the last phase item props (name, icon and description))

  // ToDo: Work on TaskInput text input updater.
  return (
    <View style={styles.container}>
      {showTasPhaseContainer ? (
        <AddTaskPhaseDetails />
      ) : (
        <AddTaskDetails
          name={task?.name}
          phoneNumber={task?.clientPhoneNumber}
          description={task?.description}
          updateTaskFormDetails={updateTaskFormDetails}
        />
      )}
    </View>
  );
};

export default AddTask;
