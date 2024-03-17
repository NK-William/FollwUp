import {View, Text, FlatList} from 'react-native';
import React from 'react';
import getStyling from './style';
import {FollwUpButton, UnderlinedText} from '../../components';
import {primary} from '../../constants/colors';

const demotasks = [
  {
    name: 'Engine rebuild',
    organization: 'VW Lazarus',
    description: 'Engine rebuild on 2018 Polo GTI License number GF RF 01 GP',
    id: '1',
  },
  {
    name: 'Brake pad replacement',
    organization: 'VW Lazarus',
    description:
      'Brake pad replacement on 2018 Polo GTI License number GF RF 01 GP',
    id: '2',
  },
  {
    name: 'Radiator flush',
    organization: 'VW Lazarus',
    description: 'Radiator flush on 2018 Polo GTI License number GF RF 01 GP',
    id: '3',
  },
  {
    name: 'Wiper replacement',
    organization: 'Mazda Lazarus',
    description: 'Wiper replacement on 2019 X3 License number GF RF 01 GP',
    id: '4',
  },
  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '5',
  },

  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '6',
  },
  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '7',
  },
  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '8',
  },
  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '9',
  },
  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '10',
  },
  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '11',
  },
  {
    name: 'Bulb replacement',
    organization: 'Jaguar Lazarus',
    description:
      'Bulb replacement on 2020 Jaguar f-pace License number GF RF 01 GP',
    id: '12',
  },
];

const TasksToTrack = () => {
  const styles = getStyling();

  const RenderItem = ({item}: {item: any}) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemTitle}>{item.name}</Text>
      <Text style={styles.listItemSubText}>{item.organization}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <UnderlinedText
        text="Task to track"
        containerStyle={styles.underlinedText}
      />
      <FlatList
        style={styles.flatList}
        data={demotasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RenderItem item={item} />}
      />

      <View style={styles.buttonContainer}>
        <FollwUpButton
          text="Link using reference"
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default TasksToTrack;
