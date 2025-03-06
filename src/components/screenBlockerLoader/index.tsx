import React, {FC} from 'react';
import {OpicFiller} from '../../containers';
import LoaderKit from 'react-native-loader-kit';

const ScreenBlockerLoader: FC = () => {
  return (
    <OpicFiller>
      <LoaderKit
        name={'BallClipRotatePulse'}
        color={'White'}
        style={{width: 50, height: 50}}
      />
    </OpicFiller>
  );
};

export default ScreenBlockerLoader;
