import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {PositiveButton, PressableText, AuthInput} from '../../components';
import {authFocusedEntry} from '../../utils/enums';

const Login = () => {
  const [focused, setFocused] = useState<authFocusedEntry>(
    authFocusedEntry.None,
  );
  const styles = getStyling();

  const handleFocusedEntry = (entry: authFocusedEntry) => {
    if (entry === authFocusedEntry.Email || entry === authFocusedEntry.Password)
      setFocused(entry);
    else setFocused(authFocusedEntry.None);
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
          entryName={authFocusedEntry.Email}
          setFocused={handleFocusedEntry}
          focused={authFocusedEntry.Email === focused}
          onChangeText={() => {}}
          iconName="envelope-o"
          containerStyle={styles.emailAuthInput}
        />
        <AuthInput
          title="PASSWORD"
          entryName={authFocusedEntry.Password}
          secureTextEntry
          setFocused={handleFocusedEntry}
          focused={authFocusedEntry.Password === focused}
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
