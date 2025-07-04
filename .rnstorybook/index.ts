import AsyncStorage from '@react-native-async-storage/async-storage';
import {view} from './storybook.requires.ts';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
