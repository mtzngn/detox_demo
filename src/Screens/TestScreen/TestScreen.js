import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class TestScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Test Screen</Text>
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

export default TestScreen;
