import {Pressable, Image, Text, View} from 'react-native';
import React, {FC} from 'react';
import type {IProgressTaskNameProps} from './interface';
import getStyling from './style';
import {useProgressTaskName} from './util';

const ProgressTaskName: FC<IProgressTaskNameProps> = props => {
  const {letters, inviteIconVisible} = useProgressTaskName(props);
  const styles = getStyling(props);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.nameCapsLetters}>{letters}</Text>
      </View>
      <Text style={styles.taskName}>{props.name}</Text>
      <View style={styles.inviteContainer}>
        {inviteIconVisible && (
          <Pressable onPress={() => console.log('Invite')}>
            <Image
              source={require('../../assets/images/invite.png')}
              style={styles.image}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default ProgressTaskName;
