import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {IIconPicker} from './interface';
import getStyling from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconPicker: FC<IIconPicker> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Icon</Text>
      <TouchableOpacity>
        <Ionicons name="image-outline" size={45} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default IconPicker;
