import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightbrown',
  },
});

export default ProfileScreen;
