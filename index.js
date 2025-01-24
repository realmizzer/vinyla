import '~/shared/lib/i18next/i18n';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/app/App';

AppRegistry.registerComponent(appName, () => App);
