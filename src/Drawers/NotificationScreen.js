import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

class NotificationScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationScreen;
