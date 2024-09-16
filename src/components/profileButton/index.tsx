import { View, Text, Pressable, Image } from 'react-native'
import React, { FC } from 'react'
import getStyling from './style'

const ProfileButton: FC = () => {
    const styles = getStyling()
  return (
    <Pressable onPress={() => {}}>
            <Image
            source={require('../../assets/images/profilePlaceholder.png')}
            style={styles.profilePlaceholder}
          />
          </Pressable>
  )
}

export default ProfileButton