import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {IBackButton} from './interface';
import getStyling from './style';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const BackButton: FC<IBackButton> = props => {
  const navigation = useNavigation();
  const styles = getStyling(props);
  return (
    <Pressable onPress={navigation.goBack} style={styles.container}>
      <Feather name="arrow-left" size={18} color={'white'} />
    </Pressable>
  );
};

export default BackButton;
