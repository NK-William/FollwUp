import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import getStyling from './style';
import {FollwUpButton, PressableText, AuthInput} from '../../components';
import {authFocusedEntry} from '../../utils/enums';
import {useRegister} from './util';

const Register = (props: any) => {
  const {navigation} = props;

  const styles = getStyling();
  const {
    focused,
    form,
    setForm,
    register,
    handleFocusedEntry,
    navigateToRegisterPage,
  } = useRegister(navigation);

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
            onChangeText={text => setForm(f => ({...f, firstName: text}))}
            iconName="envelope-o"
            containerStyle={styles.authInput}
            value={form.firstName}
          />
          <AuthInput
            title="LAST NAME"
            entryName={authFocusedEntry.LastName}
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.LastName === focused}
            onChangeText={text => setForm(f => ({...f, lastName: text}))}
            iconName="lock"
            containerStyle={styles.authInput}
            value={form.lastName}
          />
          <AuthInput
            title="PHONE NUMBER"
            entryName={authFocusedEntry.PhoneNumber}
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.PhoneNumber === focused}
            onChangeText={text => setForm(f => ({...f, phoneNumber: text}))}
            iconName="envelope-o"
            containerStyle={styles.authInput}
            value={form.phoneNumber}
            keyboardType="phone-pad"
          />
          <AuthInput
            title="EMAIL"
            entryName={authFocusedEntry.Email}
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.Email === focused}
            onChangeText={text => setForm(f => ({...f, email: text}))}
            iconName="lock"
            containerStyle={styles.authInput}
            value={form.email}
          />
          <AuthInput
            title="PASSWORD"
            entryName={authFocusedEntry.Password}
            secureTextEntry
            setFocused={handleFocusedEntry}
            focused={authFocusedEntry.Password === focused}
            onChangeText={text => setForm(f => ({...f, password: text}))}
            iconName="lock"
            containerStyle={styles.bottomAuthInput}
            value={form.password}
          />
        </ScrollView>
      </View>
      <View style={styles.buttonActionsContainer}>
        <View style={styles.buttonTextContainer}>
          <FollwUpButton text="Register" onPress={register} />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <PressableText onPress={navigateToRegisterPage} text="Sign In" />
        </View>
      </View>
    </View>
  );
};

export default Register;
