import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from '..';
import type {IProfileInputProps} from './interface';
import getStyling from './style';

const ProfileInput: FC<IProfileInputProps> = props => {
  const {
    iconName,
    iconType,
    iconSize,
    iconStyle,
    title,
    isReadOnly,
    value,
    savedText,
    onChangeText,
    onSaveIconPress,
  } = props;
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Icon
        iconType={iconType}
        iconName={iconName}
        size={iconSize}
        style={iconStyle}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          editable={!isReadOnly}
          value={value}
          onChangeText={text => onChangeText && onChangeText(text)}
          style={styles.input}
        />
        <View style={styles.inputLine} />
      </View>
      {!isReadOnly && savedText?.toLowerCase() !== value.toLowerCase() ? (
        <Ionicons
          onPress={() => onSaveIconPress && onSaveIconPress(value)}
          name="save"
          size={20}
          style={styles.penIcon}
        />
      ) : null}
    </View>
  );
};

export default ProfileInput;
