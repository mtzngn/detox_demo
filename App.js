import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';

import WelcomeScreen from './src/Screens/WelcomeScreen/WelcomeScreen';
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

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Notification: NotificationScreen,
    MyModal: TestModal,
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  },
);

const MainStack = createStackNavigator(
  {
    Drawer: DrawerNavigator,
    User: UserScreen,
  },
  {
    initialRouteName: 'Drawer',
    defaultNavigationOptions: {
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

// const HomeAndModalStack = createStackNavigator(
//   {
//     Main: MainStack,
//     MyModal: TestModal,
//   },
//   {
//     initialRouteName: 'Main',
//     mode: 'modal',
//     headerMode: 'none',
//   },
// );

const TabNavigator = createBottomTabNavigator(
  {
    Home: MainStack,
    Feed: FeedScreen,
    Search: TestScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'Home':
            return <Icon name="home" size={30} color="gray" />;
          case 'Feed':
            return <Icon name="feed" size={30} color="gray" />;
          case 'Search':
            return <Icon name="search" size={25} color="gray" />;
          case 'Settings':
            return <Icon name="adjust" size={30} color="gray" />;
          default:
            return;
        }
      },
      tabBarOptions: {
        activeTintColor: 'lightblue',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'lightblue',
        labelStyle: {
          fontSize: 10,
        },
      },
    }),
  },
);

const SwitchNavigator = createSwitchNavigator({
  Tab: TabNavigator,
  Home: HomeScreen,
  Profile: ProfileScreen,
});

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
