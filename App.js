import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';

import UserScreen from './src/Screens/UserScreen/UserScreen';
import TestScreen from './src/Screens/TestScreen/TestScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import SettingsScreen from './src/Screens/SettingsScreen/SettingsScreen';
import FeedScreen from './src/Screens/FeedScreen/FeedScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import TestModal from './src/Modals/TestModal';
import {createDrawerNavigator} from 'react-navigation-drawer';
import NotificationScreen from './src/Drawers/NotificationScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const SwitchNavigator = createSwitchNavigator(
  {
    // Tab: TabNavigator,
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    headerMode: 'screen',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Notification: NotificationScreen,
    MyModal: TestModal,
    Switch: SwitchNavigator,
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
  },
);

const HomeStack = createStackNavigator(
  {
    Drawer: DrawerNavigator,
    User: UserScreen,
  },
  {
    initialRouteName: 'Drawer',
    defaultNavigationOptions: {
      title: 'My Project',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
const FeedStack = createStackNavigator({
  Feed: FeedScreen,
});
const TestStack = createStackNavigator({
  Search: TestScreen,
});
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Feed: FeedStack,
    Search: TestStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'Home':
            return <SimpleIcon name="home" size={20} color="black" />;
          case 'Feed':
            return <SimpleIcon name="feed" size={20} color="black" />;
          case 'Search':
            return <SimpleIcon name="magnifier" size={20} color="black" />;
          case 'Settings':
            return <SimpleIcon name="settings" size={20} color="black" />;
          default:
            return;
        }
      },
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'lightgray',
        inactiveBackgroundColor: 'white',
      },
    }),
  },
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
