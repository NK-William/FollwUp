import {Image, Text, View} from 'react-native';
import React from 'react';
import getStyling from './style';
import {useProfile} from './util';

const Profile = () => {
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image
          style={styles.profilePic}
          source={require('../../assets/images/profilePicture.jpeg')}
        />
      </View>
      <View style={styles.profileInfoCardContainer}>
        <View style={styles.profileInfoCard}></View>
      </View>
      <View style={styles.backArrowContainer}>
        <Image
          style={styles.backArrowIcon}
          source={require('../../assets/images/backArrow.png')}
        />
      </View>
    </View>
  );
};

export default Profile;
