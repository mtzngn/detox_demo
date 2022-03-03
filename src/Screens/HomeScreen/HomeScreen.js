import React from 'react';
import {LogBox} from 'react-native';
import {View, Text, TouchableOpacity, Button} from 'react-native';
LogBox.ignoreAllLogs();

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  // Ignore log notification by message

  //Ignore all log notifications

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('User', {
              otherParam: 'Title From Param',
            })
          }>
          <Text style={{color: 'red', margin: 10}}>Go to User Page</Text>
        </TouchableOpacity>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

export default HomeScreen;
