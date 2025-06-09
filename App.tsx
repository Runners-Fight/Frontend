import {useColorScheme, View, SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import './global.css';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle} className="flex-1">
      <View className="flex-1 items-center justify-center" />
      {/* 요기에 본인이 만든 컴포넌트 테스트하세요~ 가운데정렬됩니당 SafeAreaView컴포넌트로 묶어놔서 노치신경안써도됩니다 */}
    </SafeAreaView>
  );
}
export default App;
