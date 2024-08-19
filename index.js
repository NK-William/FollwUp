/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {RestfulProvider} from 'restful-react';

const WrappedApp = () => (
  <RestfulProvider
    base="https://419c-160-19-36-36.ngrok-free.app"
    requestOptions={() => ({
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    })}>
    <App />
  </RestfulProvider>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
