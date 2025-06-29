import OnBoardingScreen from '@screens/OnBoarding';
import HomeScreen from '@screens/Home';
import MyScreen from '@screens/My';
import AlertScreen from '@screens/Alert';
import CrewScreen from '@screens/Crew';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

export default Navigation;
