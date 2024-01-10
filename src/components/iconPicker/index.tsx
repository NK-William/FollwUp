import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {IIconPicker} from './interface';
import getStyling from './style';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const IconPicker: FC<IIconPicker> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Icon</Text>
      <TouchableOpacity>
        <MCI name="file-image-plus-outline" size={45} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default IconPicker;
