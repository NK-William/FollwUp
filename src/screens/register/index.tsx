import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {PositiveButton, PressableText, AuthInput} from '../../components';
import {authFocusedEntry} from '../../utils/enums';

const Register = () => {
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
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.line} />
          </View>
          <Image
            source={require('../../assets/images/authImage.png')}
            style={styles.image}
          />
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
            text="Register"
            onPress={() => console.log('Button pressed')}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <PressableText text="Sign In" />
        </View>
      </View>
    </View>
  );
};

export default Register;
