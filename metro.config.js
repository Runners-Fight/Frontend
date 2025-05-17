const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 * this is js bundler
 */
const config = getDefaultConfig(__dirname);
const mergedConfig = mergeConfig(config, {
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs'],
  },
});

// NativeWind 설정
module.exports = withNativeWind(mergedConfig, {input: './global.css'});
