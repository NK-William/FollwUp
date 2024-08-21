import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import type {IFollwUpButtonProps} from './interface';
import LoaderKit from 'react-native-loader-kit';

const FollwUpButton: FC<IFollwUpButtonProps> = props => {
  const styles = getStyling(props);
  const {text, loading, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {loading ? (
        <LoaderKit
          style={styles.loader}
          name={'BallClipRotatePulse'}
          color={'white'}
        />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default FollwUpButton;
