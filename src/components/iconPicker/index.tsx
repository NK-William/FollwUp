import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {IIconPicker} from './interface';
import getStyling from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {OpicFiller} from '../../containers';
import {Icon} from '..';
import iconNameTypes from '../../constants/iconNameTypes';
import {accent, close} from '../../constants/colors';
import {IIconNameType} from '../../interfaces';

const IconPicker: FC<IIconPicker> = props => {
  const {initIcon: icon, iconSelected} = props;

  const [iconNameType, setIconNameType] = useState<IIconNameType | undefined>(
    icon,
  );
  const [showPickerPopup, setShowPickerPopup] = useState(false);
  const setSelectIcon = (icon: IIconNameType) => {
    if (icon.name !== iconNameType?.name) {
      iconSelected && iconSelected(icon);
      setIconNameType(icon);
    }

    setShowPickerPopup(false);
  };

  useEffect(() => {
    if (!icon && iconSelected) {
      setIconNameType(undefined);
    } else {
      setIconNameType(icon);
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
            {iconNameTypes.map((iconNameType, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectIcon(iconNameType)}
                style={{margin: 2, padding: 5}}>
                <Icon
                  iconType="Ionicons"
                  iconName={iconNameType.name}
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
            {iconNameType ? (
              // TODO::: Extent this to support other icon types
              <Ionicons
                name={iconNameType.name}
                size={45}
                style={styles.icon}
              />
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
