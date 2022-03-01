import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomePage from './src/Pages/WelcomePage/WelcomePage';
import UserPage from './src/Pages/UserPage/UserPage';
import TestPage from './src/Pages/TestPage/TestPage';
import ProfilePage from './src/Pages/ProfilePage/ProfilePage';
import SettingsPage from './src/Pages/SettingsPage/SettingsPage';
import FeedPage from './src/Pages/FeedPage/FeedPage';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function LogoTitle() {
  return <Text>LOGO TITLE</Text>;
}
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TestPage" component={TestPage} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} />
      <Tab.Screen name="SettingsPage" component={SettingsPage} />
      <Tab.Screen name="FeedPage" component={FeedPage} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
