import {Image, Text, View} from 'react-native';
import React from 'react';
import getStyling from './style';
import {useProfile} from './util';
import {ProfileInput} from '../../components';

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
          <ProfileInput
            title="First Name"
            iconType="Ionicons"
            iconName="person-outline"
          />
          <ProfileInput
            title="Last Name"
            iconType="Ionicons"
            iconName="person-outline"
            containerStyle={styles.ProfileInputContainer}
          />
          <ProfileInput
            title="ID Number"
            iconType="Ionicons"
            iconName="person-outline"
            containerStyle={styles.ProfileInputContainer}
          />
          <ProfileInput
            title="Email Address"
            iconType="Ionicons"
            iconName="person-outline"
            containerStyle={styles.ProfileInputContainer}
          />
          <ProfileInput
            title="Phone Number"
            iconType="Ionicons"
            iconName="person-outline"
            containerStyle={styles.ProfileInputContainer}
          />
        </View>
      </View>
      <View style={styles.backArrowContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/backArrow.png')}
        />
      </View>
      <View style={styles.cameraIconContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/camera.png')}
        />
      </View>
    </View>
  );
};

export default Profile;
