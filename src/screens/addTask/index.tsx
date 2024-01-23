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

  const styles = getStyling();

  const validateTaskDetails = () => {
    if (!task.name && !task.clientPhoneNumber) {
    } else if (!task.name) {
    } else if (!task.clientPhoneNumber) {
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

  const showTaskForm = (value: boolean) => {
    setName('');
    setDescription('');
    setShowTaskPhaseContainer(value);
  };

  const displayPreviousPhase = () => {
    let poppedPhase = task.phases.pop();

    if (poppedPhase) {
      setName(poppedPhase.name);
      setDescription(poppedPhase.description ?? '');
    }
  };

  const addPhase = () => {
    if (!name && !description) {
    } else if (!name) {
    } else if (!description) {
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
          updateShowTaskPhaseContainer={value => showTaskForm(value)}
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
