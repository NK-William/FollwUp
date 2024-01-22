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
  phases: [],
  status: taskStatus.Pending,
};

const AddTask = () => {
  const [showTasPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  console.log('task: ', task);

  const styles = getStyling();

  const validateTaskDetails = () => {
    if (!task.name && !task.clientPhoneNumber) {
      console.log('Please enter name and client phone number.');
    } else if (!task.name) {
      console.log('Please enter name.');
    } else if (!task.clientPhoneNumber) {
      console.log('Please enter client phone number.');
    } else {
      setShowTaskPhaseContainer(true);
    }
  };

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

  const displayPreviousPhase = () => {
    console.log('phases length before: ', task.phases);
    let poppedPhase = task.phases.pop();

    console.log('phases length after: ', task.phases);

    if (poppedPhase) {
      setName(poppedPhase.name);
      setDescription(poppedPhase.description ?? '');
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
          updateShowTaskPhaseContainer={setShowTaskPhaseContainer}
          displayPreviousPhase={displayPreviousPhase}
        />
      ) : (
        <AddTaskDetails
          name={task?.name}
          phoneNumber={task?.clientPhoneNumber}
          description={task?.description}
          updateTaskFormDetails={updateTaskFormDetails}
          updateShowTaskPhaseContainer={validateTaskDetails}
        />
      )}
    </View>
  );
};

export default AddTask;
