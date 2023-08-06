import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import getStyling from './style';
import {useHome} from './util';
import {ProgressBar, ProgressTaskName} from '../../components';

interface ITaks {
  clientFirstName: string;
  clientLastName: string;
  name: string;
  color: string;
  progress: number;
  id: string;
}

const tasks: ITaks[] = [
  {
    clientFirstName: 'William',
    clientLastName: 'Nkuna',
    name: 'Engine rebuild',
    color: 'green',
    progress: 100,
    id: '1',
  },
  {
    clientFirstName: 'Effy',
    clientLastName: 'Fredy',
    name: 'Radiator replacement',
    color: 'orange',
    progress: 90,
    id: '2',
  },
  {
    clientFirstName: 'Gift',
    clientLastName: 'Thubane',
    name: 'Engine rebuild',
    color: 'purple',
    progress: 83,
    id: '3',
  },
  {
    clientFirstName: 'Karabo',
    clientLastName: 'Jerry',
    name: 'Turbo installation',
    color: 'red',
    progress: 50,
    id: '4',
  },
  {
    clientFirstName: 'Thabo',
    clientLastName: 'Maleka',
    name: 'light switch replacement',
    color: 'blue',
    progress: 21,
    id: '5',
  },
  {
    clientFirstName: 'Kamo',
    clientLastName: 'Nkuna',
    name: 'Oil change',
    color: 'gray',
    progress: 18,
    id: '6',
  },
  {
    clientFirstName: 'Chris',
    clientLastName: 'Maleka',
    name: 'Radiator flush',
    color: 'brown',
    progress: 8,
    id: '7',
  },
];

const Home = () => {
  const styles = getStyling();
  const {} = useHome();
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.profilePlaceholderContainer}>
          <Image
            source={require('../../assets/images/profilePlaceholder.png')}
            style={styles.profilePlaceholder}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>All Tasks Progress</Text>
          <ProgressBar containerStyle={styles.progressBar} />
        </View>
        <View style={styles.progressTasksContainer}>
          <FlatList
            data={tasks}
            renderItem={task => (
              <ProgressTaskName
                {...task.item}
                containerStyle={styles.progressTaskNameContainer}
              />
            )}
            keyExtractor={task => task.id}
          />
        </View>
      </View>
      <View style={styles.tasksContainer}>
        <Text>Home</Text>
      </View>
    </View>
  );
};

export default Home;
