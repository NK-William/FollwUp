import { View, Text, Pressable, Image } from 'react-native'
import React, { FC } from 'react'
import getStyling from './style'
import { useNavigation } from '@react-navigation/native';

const ProfileButton: FC = () => {
    const navigation = useNavigation();
    const styles = getStyling()
  return (
    <Pressable onPress={() => navigation.navigate('Profile')}>
            <Image
            source={require('../../assets/images/profilePlaceholder.png')}
            style={styles.profilePlaceholder}
          />
          </Pressable>
  )
}

export default ProfileButton