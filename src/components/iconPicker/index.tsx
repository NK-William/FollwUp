import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {IIconPicker} from './interface';
import getStyling from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {OpicFiller} from '../../containers';
import {Icon} from '..';
import iconNames from '../../constants/iconNames';
import {accent, close} from '../../constants/colors';

const IconPicker: FC<IIconPicker> = props => {
  const {iconName: icon, iconSelected} = props;

  const [iconName, setIconName] = React.useState(icon);
  const [showPickerPopup, setShowPickerPopup] = React.useState(false);
  const setSelectIcon = (name: string) => {
    if (name !== iconName) {
      iconSelected && iconSelected(name);
      setIconName(name);
    }

    setShowPickerPopup(false);
  };

  useEffect(() => {
    if (!icon && iconSelected) {
      setIconName('');
    } else {
      setIconName(icon);
    }
  }, [icon]);

  const styles = getStyling(props);

  const IconSelector = () => {
    return (
      <View style={styles.popupContainer}>
        <View style={{alignItems: 'flex-end'}}>
          <View style={styles.closeIconContainer}>
            <TouchableOpacity onPress={() => setShowPickerPopup(false)}>
              <Icon
                iconType="Ionicons"
                iconName="close"
                size={25}
                style={{color: close}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.iconPickerScrollView}>
          <View style={styles.popupInnerContainer}>
            {iconNames.map((name, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectIcon(name)}
                style={{margin: 2, padding: 5}}>
                <Icon
                  iconType="Ionicons"
                  iconName={name}
                  style={{color: accent}}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showPickerPopup ? (
        <IconSelector />
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default IconPicker;
