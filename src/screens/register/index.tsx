import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {follwUpButton, PressableText, AuthInput} from '../../components';
import {authFocusedEntry} from '../../utils/enums';
import {useRegister} from './util';

const Register = () => {
  const styles = getStyling();
  const {focused, handleFocusedEntry} = useRegister();

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
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <AuthInput
            title="FIRST NAME"
            entryName={authFocusedEntry.FirstName}
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.FirstName === focused}
            onChangeText={() => {}}
            iconName="envelope-o"
            containerStyle={styles.authInput}
          />
          <AuthInput
            title="LAST NAME"
            entryName={authFocusedEntry.LastName}
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.LastName === focused}
            onChangeText={() => {}}
            iconName="lock"
            containerStyle={styles.authInput}
          />
          <AuthInput
            title="PHONE NUMBER"
            entryName={authFocusedEntry.PhoneNumber}
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.PhoneNumber === focused}
            onChangeText={() => {}}
            iconName="envelope-o"
            containerStyle={styles.authInput}
          />
          <AuthInput
            title="EMAIL"
            entryName={authFocusedEntry.Email}
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.Email === focused}
            onChangeText={() => {}}
            iconName="lock"
            containerStyle={styles.authInput}
          />
          <AuthInput
            title="PASSWORD"
            entryName={authFocusedEntry.Password}
            secureTextEntry
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.Password === focused}
            onChangeText={() => {}}
            iconName="lock"
            containerStyle={styles.bottomAuthInput}
          />
        </ScrollView>
      </View>
      <View style={styles.buttonActionsContainer}>
        <View style={styles.buttonTextContainer}>
          <follwUpButton
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
