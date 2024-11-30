import {View, Text, Pressable, Image} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {useNavigation} from '@react-navigation/native';
import {profile} from '../../constants/pageNames';

const ProfileButton: FC = () => {
  const navigation = useNavigation();
  const styles = getStyling();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(profile as never)}>
      <Image
        source={require('../../assets/images/profilePlaceholder.png')}
        style={styles.profilePlaceholder}
      />
    </Pressable>
  );
};

export default ProfileButton;
