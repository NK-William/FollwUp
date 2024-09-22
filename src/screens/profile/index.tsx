import React from 'react';
import {Image, ScrollView, TouchableOpacity, View, Text} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  // FollwUpButton,
  // PressableText,
  ProfileInput,
  BackButton,
} from '../../components';
import {lightText} from '../../constants/colors';
import getStyling from './style';
import {useProfile} from './util';
// import {OpicFiller} from '../../containers';
// import {cameraPickerType} from './enum';

const Profile = () => {
  const styles = getStyling();
  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    setState,
    showPopup,
    // cameraClicked,
  } = useProfile();

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
              savedText="Tebogo"
              iconType="Ionicons"
              iconName="person-outline"
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              value={lastName}
              onChangeText={text => setState(s => ({...s, lastName: text}))}
              title="Last Name"
              savedText="Nkuna"
              iconType="Ionicons"
              iconName="person-outline"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              value={emailAddress}
              title="Email Address"
              savedText="Tebog@gmail.com"
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
              savedText="0712932445"
              iconType="Feather"
              iconName="phone"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
          </ScrollView>
        </View>
      </View>
      <BackButton containerStyle={styles.backArrowContainer} />
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
    </View>
  );
};

export default Profile;
