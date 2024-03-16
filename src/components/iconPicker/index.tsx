import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {IIconPicker} from './interface';
import getStyling from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconPicker: FC<IIconPicker> = props => {
  const {iconName, setShowPickerPopup} = props;
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Icon</Text>
      <Pressable
        style={{marginTop: 8}}
        onPress={() => setShowPickerPopup(true)}>
        {iconName ? (
          <Ionicons name={iconName} size={45} style={styles.icon} />
        ) : (
          <Text>Tab to add icon</Text>
        )}
      </Pressable>
    </View>
  );
};

export default IconPicker;
