const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const nodeLibs = require('node-libs-react-native');

const config = mergeConfig(getDefaultConfig(__dirname), {
  transformer: {
    unstable_allowRequireContext: true, // require.context관련 에러나서 활성화했습니다!
  },
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs'],
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    extraNodeModules: nodeLibs, // node.js 폴리필용!
  },
});

module.exports = withNativeWind(config, {input: './global.css'});
