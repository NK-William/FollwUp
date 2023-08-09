import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskListItemProps} from './interface';
import {useTaskListItem} from './util';

const TaskListItem: FC<ITaskListItemProps> = props => {
  const {} = useTaskListItem(props);
  const styles = getStyling(props);
  return (
    <View>
      <Text>TaskListItem</Text>
    </View>
  );
};

export default TaskListItem;
