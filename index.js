/**
 * @format
 */

import axios from 'axios';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// default
axios.defaults.baseURL = 'https://amattang.shop';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

AppRegistry.registerComponent(appName, () => App);
