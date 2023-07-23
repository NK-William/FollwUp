import {View, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {PositiveButton, PressableText, AuthInput} from '../../components';
import {authFocusedEntry} from '../../utils/enums';

const Login = () => {
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.none,
  );
  const styles = getStyling();

  const handleFocusedEntry = (entry: authFocusedEntry) => {
    if (entry === authFocusedEntry.email || entry === authFocusedEntry.password)
      setFocused(entry);
    else setFocused(authFocusedEntry.none);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <AuthInput
          title="EMAIL"
          entryName={authFocusedEntry.email}
          setFocused={handleFocusedEntry}
          focused={authFocusedEntry.email === focused}
          onChangeText={() => {}}
          value="TebogoNK@gmail.com"
          iconName="person-outline"
          containerStyle={styles.emailAuthInput}
        />
        <AuthInput
          title="PASSWORD"
          entryName={authFocusedEntry.password}
          secureTextEntry
          setFocused={handleFocusedEntry}
          focused={authFocusedEntry.password === focused}
          onChangeText={() => {}}
          value="Tebogo"
          iconName="person-outline"
          containerStyle={styles.passwordAuthInput}
        />
      </View>
      <View style={styles.buttonActionsContainer}>
        <View style={styles.buttonTextContainer}>
          <PositiveButton
            text="Login"
            onPress={() => console.log('Button pressed')}
          />
          <PressableText
            text="Forgot Password?"
            textStyle={styles.forgotPasswordText}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <PressableText text="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default Login;
