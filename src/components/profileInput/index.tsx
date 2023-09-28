import {View, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
import type {IProfileInputProps} from './interface';
import getStyling from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Icon from '../Icon';

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
        <TextInput style={styles.input} />
        <View style={styles.inputLine} />
      </View>
      {/* <Icon iconType="FontAwesome6" iconName="pencil" style={styles.penIcon} /> */}
      <FontAwesome6 name="pencil" size={20} style={styles.penIcon} />
    </View>
  );
};

export default ProfileInput;
