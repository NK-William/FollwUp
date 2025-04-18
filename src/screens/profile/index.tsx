import React from 'react';
import {Image, ScrollView, TouchableOpacity, View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  // FollwUpButton,
  // PressableText,
  ProfileInput,
  BackButton,
  ScreenBlockerLoader,
} from '../../components';
import {lightText} from '../../constants/colors';
import getStyling from './style';
import {useProfile} from './util';
import getGlobalStyling from '../../utils/styles';
// import {OpicFiller} from '../../containers';
// import {cameraPickerType} from './enum';

const Profile = (props: any) => {
  const {navigation} = props;
  const styles = getStyling();
  const globalStyles = getGlobalStyling();
  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    prevFirstName,
    prevLastName,
    prevPhoneNumber,
    isLoading,
    showPopup,
    signOut,
    setState,
    firstNameUpdateClicked,
    lastNameUpdateClicked,
    phoneNumberUpdateClicked,
    // cameraClicked,
  } = useProfile(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.profileIconContainer}>
        <Image
          style={styles.profileIcon}
          source={require('../../assets/images/profileIcon.png')}
        />
      </View>
      <View style={styles.profileInfoCardContainer}>
        <View style={styles.profileInfoCard}>
          <ScrollView style={styles.scrollView}>
            <ProfileInput
              value={firstName}
              onChangeText={text => setState(s => ({...s, firstName: text}))}
              title="First Name"
              savedText={prevFirstName}
              iconType="Ionicons"
              iconName="person-outline"
              iconStyle={{color: lightText}}
              onSaveIconPress={firstNameUpdateClicked}
            />
            <ProfileInput
              value={lastName}
              onChangeText={text => setState(s => ({...s, lastName: text}))}
              title="Last Name"
              savedText={prevLastName}
              iconType="Ionicons"
              iconName="person-outline"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
              onSaveIconPress={lastNameUpdateClicked}
            />
            <ProfileInput
              value={emailAddress}
              title="Email Address"
              isReadOnly
              iconType="Fontisto"
              iconName="email"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              value={phoneNumber}
              onChangeText={text => setState(s => ({...s, phoneNumber: text}))}
              title="Phone Number"
              savedText={prevPhoneNumber}
              iconType="Feather"
              iconName="phone"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
              onSaveIconPress={phoneNumberUpdateClicked}
            />
          </ScrollView>
        </View>
      </View>
      <BackButton containerStyle={globalStyles.absoluteBackButton} />
      <TouchableOpacity onPress={signOut} style={styles.logoutIconContainer}>
        <Feather name="log-out" size={18} color={'white'} />
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => setState(s => ({...s, showPopup: true}))}
        style={styles.cameraIconContainer}>
        <FontAwesome name="camera" size={18} color={'white'} />
      </TouchableOpacity>
      {showPopup && (
        <OpicFiller>
          <View style={styles.popupContainer}>
            <View style={styles.optionButtonContainer}>
              <FollwUpButton
                text="Take a picture"
                onPress={() => cameraClicked(cameraPickerType.CAMERA)}
                containerStyle={{height: 50, marginBottom: 10}}
              />
              <FollwUpButton
                text="Select a picture"
                onPress={() => cameraClicked(cameraPickerType.GALLERY)}
                containerStyle={{height: 50, marginTop: 10}}
              />
            </View>

            <PressableText
              text="Cancel"
              textStyle={{marginBottom: 8}}
              onPress={() => setState(s => ({...s, showPopup: false}))}
            />
          </View>
        </OpicFiller>
      )} */}
      {isLoading && <ScreenBlockerLoader />}
    </View>
  );
};

export default Profile;
