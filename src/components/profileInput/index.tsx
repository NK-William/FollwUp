import {View, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
import type {IProfileInputProps} from './interface';
import getStyling from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ProfileInput: FC<IProfileInputProps> = props => {
  const styles = getStyling(props);

  const icon = (p: {
    iconType: 'Ionicons' | 'FontAwesome' | 'FontAwesome6';
    iconName: string;
    size?: number;
    style?: any;
  }) => {
    switch (p.iconType) {
      case 'Ionicons':
        return <Ionicons size={20} style={styles.penIcon} />;
      case 'FontAwesome':
        return <FontAwesome size={20} style={styles.penIcon} />;
      case 'FontAwesome6':
        return <FontAwesome6 size={20} style={styles.penIcon} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Ionicons name="person-outline" size={20} style={styles.inputIcon} />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput style={styles.input} />
        <View style={styles.inputLine} />
      </View>
      <FontAwesome6 name="pen" size={20} style={styles.penIcon} />
    </View>
  );
};

export default ProfileInput;
