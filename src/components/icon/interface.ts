export interface IIconProps {
  iconType:
    | 'Ionicons'
    | 'AntDesign'
    | 'Fontisto'
    | 'Feather'
    | 'FontAwesome5'
    | 'Entypo';
  iconName: string;
  size?: number;
  style?: any;
}
