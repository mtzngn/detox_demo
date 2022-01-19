import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Hello PAGE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    width: 100,
    height: 50,
    backgroundColor: 'blue',
  },
});

export default WelcomePage;
