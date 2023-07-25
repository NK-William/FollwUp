import {View, Text, Image} from 'react-native';
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
        <Image
          source={require('../../assets/images/authImage.png')}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.line} />
        </View>
        <AuthInput
          title="EMAIL"
          entryName={authFocusedEntry.email}
          setFocused={handleFocusedEntry}
          focused={authFocusedEntry.email === focused}
          onChangeText={() => {}}
          iconName="envelope-o"
          containerStyle={styles.emailAuthInput}
        />
        <AuthInput
          title="PASSWORD"
          entryName={authFocusedEntry.password}
          secureTextEntry
          setFocused={handleFocusedEntry}
          focused={authFocusedEntry.password === focused}
          onChangeText={() => {}}
          iconName="lock"
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
