import OnBoardingScreen from '@screens/OnBoarding';
import HomeScreen from '@screens/Home';
import MyScreen from '@screens/My';
import AlertScreen from '@screens/Alert';
import CrewScreen from '@screens/Crew';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import './global.css';

const RootStack = createNativeStackNavigator({
  screens: {
    OnBoarding: OnBoardingScreen,
    Home: HomeScreen,
    My: MyScreen,
    Alert: AlertScreen,
    Crew: CrewScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <Navigation />;
}
export default App;
