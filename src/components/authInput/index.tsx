import {View, Text, TextInput, Pressable} from 'react-native';
import React, {FC, useState, useRef} from 'react';
import getStyling from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {lightText} from '../../constants/colors';
import {IAuthInputProps} from './interface';

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

  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const textInputRef = useRef<TextInput | null>(null);

  const styles = getStyling({containerStyle, focused});

  const handleFocus = () => {
    if (!focused) {
      // if (textInputRef.current) textInputRef.current.focus(); // test on physical device
      setFocused(entryName);
    }
  };

  return (
    <Pressable onPress={handleFocus} style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name={iconName} size={20} color={lightText} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={textInputRef}
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
            secureTextEntry={hidePassword}
          />

          {secureTextEntry &&
            (hidePassword ? (
              <Pressable onPress={() => setHidePassword(!hidePassword)}>
                <Icon name="eye-off-outline" size={20} color={lightText} />
              </Pressable>
            ) : (
              <Pressable onPress={() => setHidePassword(!hidePassword)}>
                <Icon name="eye-outline" size={20} color={lightText} />
              </Pressable>
            ))}
        </View>
      </View>
    </Pressable>
  );
};

export default AuthInput;
