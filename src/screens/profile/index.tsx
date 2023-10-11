import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ProfileInput} from '../../components';
import {lightText} from '../../constants/colors';
import getStyling from './style';
import {useProfile} from './util';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = () => {
  const styles = getStyling();
  const {firstName, lastName, idNumber, emailAddress, phoneNumber, setState} =
    useProfile();

  const cameraClicked = async () => {
    // const result = await launchCamera({mediaType: 'photo'}, () => {});
    const result = await launchImageLibrary({mediaType: 'photo'}, () => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image
          style={styles.profilePic}
          source={require('../../assets/images/profilePicture.jpeg')}
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
              value={idNumber}
              onChangeText={text => setState(s => ({...s, idNumber: text}))}
              title="ID Number"
              savedText="9701010000000"
              iconType="AntDesign"
              iconName="idcard"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              value={emailAddress}
              onChangeText={text => setState(s => ({...s, emailAddress: text}))}
              title="Email Address"
              savedText="Tebog@gmail.com"
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
      <TouchableOpacity style={styles.backArrowContainer}>
        <Feather name="arrow-left" size={18} color={'white'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={cameraClicked}
        style={styles.cameraIconContainer}>
        <FontAwesome name="camera" size={18} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
