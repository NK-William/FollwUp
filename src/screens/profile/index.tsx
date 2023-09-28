import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import getStyling from './style';
import {useProfile} from './util';
import Feather from 'react-native-vector-icons/Feather';
import {ProfileInput} from '../../components';
import {accent, lightText} from '../../constants/colors';

const Profile = () => {
  const styles = getStyling();
  const {} = useProfile();
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
              title="First Name"
              iconType="Ionicons"
              iconName="person-outline"
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              title="Last Name"
              iconType="Ionicons"
              iconName="person-outline"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              title="ID Number"
              iconType="AntDesign"
              iconName="idcard"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              title="Email Address"
              iconType="Fontisto"
              iconName="email"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
            <ProfileInput
              title="Phone Number"
              iconType="Feather"
              iconName="phone"
              containerStyle={styles.ProfileInputContainer}
              iconStyle={{color: lightText}}
            />
          </ScrollView>
        </View>
      </View>
      <View style={styles.backArrowContainer}>
        <Feather name="arrow-left" size={18} color={accent} />
      </View>
      <View style={styles.cameraIconContainer}>
        <Feather name="camera" size={18} color={accent} />
      </View>
    </View>
  );
};

export default Profile;
