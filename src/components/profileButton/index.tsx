import {View, Text, Pressable, Image} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {useNavigation} from '@react-navigation/native';
import {profile} from '../../constants/PageNames';

const ProfileButton: FC = () => {
  const navigation = useNavigation();
  const styles = getStyling();
  return (
    <Pressable onPress={() => navigation.navigate(profile)}>
      <Image
        source={require('../../assets/images/profilePlaceholder.png')}
        style={styles.profilePlaceholder}
      />
    </Pressable>
  );
};

export default ProfileButton;
