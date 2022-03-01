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
import TestModal from './src/Modals/TestModal';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  componentDidMount() {
    console.log('home screen mounted');
  }
  componentWillUnmount() {
    console.log('home screen will unmount called');
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to UserPage"
          onPress={() =>
            this.props.navigation.navigate('User', {
              otherParam: 'Title From Param',
            })
          }
        />
      </View>
    );
  }
}
const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Home',
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

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    MyModal: TestModal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
