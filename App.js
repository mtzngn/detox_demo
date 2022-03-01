import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from './src/Screens/WelcomeScreen/WelcomeScreen';
import UserScreen from './src/Screens/UserScreen/UserScreen';
import TestScreen from './src/Screens/TestScreen/TestScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import SettingsScreen from './src/Screens/SettingsScreen/SettingsScreen';
import FeedScreen from './src/Screens/FeedScreen/FeedScreen';
import {Text, View, Button} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to UserPage"
          onPress={() => this.props.navigation.navigate('User')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
