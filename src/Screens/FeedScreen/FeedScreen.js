import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FeedScreen extends React.Component {
  static navigationOptions = () => {
    return {
      tabBarTestID: 'FeedTab',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Feed Screen</Text>
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

export default FeedScreen;
