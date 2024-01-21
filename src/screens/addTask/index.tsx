import {View, Text} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {ITask, ITaskPhase} from '../../interfaces';
import {AddTaskDetails, AddTaskPhaseDetails} from '../../containers';
import {
  TaskFormFieldEnum,
  taskPhaseStatus,
  taskStatus,
} from '../../utils/enums';

const taskInit: ITask = {
  name: '',
  clientPhoneNumber: '',
  description: '',
  phases: [],
  status: taskStatus.Pending,
};

const AddTask = () => {
  const [showTasPhaseContainer, setShowTaskPhaseContainer] = useState(true);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const styles = getStyling();

  const updateTaskFormDetails = (value: string, field: TaskFormFieldEnum) => {
    switch (field) {
      case TaskFormFieldEnum.name:
        setTask({...task, name: value});
        break;
      case TaskFormFieldEnum.phoneNumber:
        setTask({...task, clientPhoneNumber: value});
        break;
      case TaskFormFieldEnum.description:
        setTask({...task, description: value});
        break;
      default:
        setTask(task);
    }
  };

  const addPhase = () => {
    if (!name && !description) {
      console.log('Please enter both name and description for the phase.');
    } else if (!name) {
      console.log('Please enter a name for the phase.');
    } else if (!description) {
      console.log('Please enter a description for the phase.');
    } else {
      let taskNumber = task.phases.length + 1;
      let taskPhase = task.phases;

      taskPhase.push({
        name,
        description,
        status: taskPhaseStatus.Pending,
        number: taskNumber,
      });

      setTask({
        ...task,
        phases: taskPhase,
      });
      setName('');
      setDescription('');
    }
  };

  // Task (pass setter, name, number and description) // Phase (pass setter,
  // and the last phase item props (name, icon and description))

  // ToDo: Work on TaskInput text input updater.
  return (
    <View style={styles.container}>
      {showTasPhaseContainer ? (
        <AddTaskPhaseDetails
          name={name}
          description={description}
          phaseNumber={task?.phases.length + 1}
          setName={setName}
          setDescription={setDescription}
          addPhase={addPhase}
        />
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
