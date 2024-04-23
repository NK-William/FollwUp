export interface IIconProps {
  iconType:
    | 'Ionicons'
    | 'AntDesign'
    | 'Fontisto'
    | 'Feather'
    | 'FontAwesome5'
    | 'FontAwesome'
    | 'Entypo';
  iconName: string;
  size?: number;
  style?: any;
}
