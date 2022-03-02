import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class TestScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test Screen</Text>
        <Button
          title="Go to Test Screen"
          onPress={() => this.props.navigation.navigate('Welcome')}
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

export default TestScreen;
