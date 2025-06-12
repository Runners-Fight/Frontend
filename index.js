import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// 환경변수로 Storybook 사용 여부 결정
const useStorybook = process.env.STORYBOOK === 'true';

if (useStorybook) {
  const StorybookUIRoot = require('./.rnstorybook').default;
  AppRegistry.registerComponent(appName, () => StorybookUIRoot);
} else {
  const App = require('./App').default;
  AppRegistry.registerComponent(appName, () => App);
}
