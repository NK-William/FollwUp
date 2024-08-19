import {View, Text, Image} from 'react-native';
import React from 'react';
import getStyling from './style';
import {FollwUpButton, PressableText, AuthInput} from '../../components';
import {authFocusedEntry} from '../../utils/enums';
import {useLogin} from './util';

const Login = (props: any) => {
  const {navigation} = props;

  const styles = getStyling();
  const {
    email,
    password,
    focused,
    setEmail,
    setPassword,
    handleFocusedEntry,
    navigateToRegisterPage,
    login,
  } = useLogin(navigation);

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
          onChangeText={setEmail}
          iconName="envelope-o"
          containerStyle={styles.emailAuthInput}
          value={email}
        />
        <AuthInput
          title="PASSWORD"
          entryName={authFocusedEntry.Password}
          secureTextEntry
          setFocused={handleFocusedEntry}
          focused={authFocusedEntry.Password === focused}
          onChangeText={setPassword}
          iconName="lock"
          containerStyle={styles.passwordAuthInput}
          value={password}
        />
      </View>
      <View style={styles.buttonActionsContainer}>
        <View style={styles.buttonTextContainer}>
          <FollwUpButton text="Login" onPress={login} />
          <PressableText
            text="Forgot Password?"
            textStyle={styles.forgotPasswordText}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <PressableText onPress={navigateToRegisterPage} text="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default Login;
