import {View, Text, Pressable, Image} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {useNavigation} from '@react-navigation/native';
import {profile} from '../../constants/pageNames';
import BackButton from '../backButton';
import getGlobalStyling from '../../utils/styles';

const ProfileButton: FC = () => {
  const navigation = useNavigation();
  const styles = getStyling();
  const globalStyles = getGlobalStyling();
  return (
    <View>
      <Pressable
        style={styles.ProfileIconContainer}
        onPress={() => navigation.navigate(profile as never)}>
        <Image
          source={require('../../assets/images/profilePlaceholder.png')}
          style={styles.profileIconPlaceholder}
        />
      </Pressable>
    </View>
  );
};

export default ProfileButton;
