import {View, Text, Image} from 'react-native';
import React from 'react';
import getStyling from './style';
import {FollwUpButton, PressableText, AuthInput} from '../../components';
import {authFocusedEntry} from '../../utils/enums';
import {useLogin} from './util';

const Login = () => {
  const styles = getStyling();
  const {focused, handleFocusedEntry} = useLogin();

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
          <FollwUpButton
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
