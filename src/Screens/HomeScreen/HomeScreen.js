import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    // drawerLabel: 'Home',
  };

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
          <Text>Go to User Page</Text>
        </TouchableOpacity>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Icon name="home" size={30} color="#900" />
        {/* <Button
            title="Open Drawer"
            onPress={() => this.props.navigation.navigate('Notification')}
          /> */}
      </View>
    );
  }
}

export default HomeScreen;
