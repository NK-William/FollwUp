import React, {FC} from 'react';
import {OpicFiller} from '../../containers';
import LoaderKit from 'react-native-loader-kit';
import {Text} from 'react-native';
import {lightText} from '../../constants/colors';

const ScreenBlockerLoader: FC = () => {
  return (
    <OpicFiller>
      <LoaderKit
        name={'BallClipRotatePulse'}
        color={'White'}
        style={{width: 50, height: 50}}
      />
      <Text style={{marginTop: 8, color: lightText}}>Please wait</Text>
    </OpicFiller>
  );
};

export default ScreenBlockerLoader;
