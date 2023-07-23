import {View, Text, TextInput, Pressable} from 'react-native';
import React, {FC, useState} from 'react';
import getStyling from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {lightText} from '../../constants/colors';
import {IAuthInputProps} from './interface';
import {authFocusedEntry} from '../../utils/enums';

const AuthInput: FC<IAuthInputProps> = props => {
  const {
    title,
    value,
    iconName,
    secureTextEntry,
    onChangeText,
    entryName,
    focused,
    setFocused,
    containerStyle,
  } = props;
  const styles = getStyling({containerStyle, focused});

  const handleFocus = () => {
    if (!focused) {
      setFocused(entryName);
    }
  };

  return (
    <Pressable onPress={handleFocus} style={styles.container}>
      <View style={{alignSelf: 'flex-end', marginBottom: 4}}>
        <Icon name={iconName} size={20} color={lightText} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.text}>{title}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
        />
      </View>
    </Pressable>
  );
};

export default AuthInput;
