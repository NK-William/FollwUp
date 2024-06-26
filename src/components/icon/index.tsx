import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {IIconProps} from './interface';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Icon: FC<IIconProps> = props => {
  switch (props.iconType) {
    case 'Ionicons':
      return (
        <Ionicons
          name={props.iconName}
          size={props.size ?? 20}
          style={props.style}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          name={props.iconName}
          size={props.size ?? 20}
          style={props.style}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          name={props.iconName}
          size={props.size ?? 20}
          style={props.style}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={props.iconName}
          size={props.size ?? 20}
          style={props.style}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={props.iconName}
          size={props.size ?? 20}
          style={props.style}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          name={props.iconName}
          size={props.size ?? 20}
          style={props.style}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={props.iconName}
          size={props.size ?? 20}
          style={props.style}
        />
      );
    default:
      return null;
  }
};

export default Icon;
