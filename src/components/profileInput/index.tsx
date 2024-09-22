import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from '..';
import type {IProfileInputProps} from './interface';
import getStyling from './style';

const ProfileInput: FC<IProfileInputProps> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Icon
        iconType={props.iconType}
        iconName={props.iconName}
        size={props.iconSize}
        style={props.iconStyle}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput
          editable={!props.isReadOnly}
          value={props.value}
          onChangeText={text =>
            props.onChangeText ? props.onChangeText(text) : null
          }
          style={styles.input}
        />
        <View style={styles.inputLine} />
      </View>
      {props.savedText !== props.value ? (
        <Ionicons name="save" size={20} style={styles.penIcon} />
      ) : null}
    </View>
  );
};

export default ProfileInput;
