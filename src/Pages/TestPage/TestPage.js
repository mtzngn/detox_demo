import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TestPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Test Page</Text>
      <Button
        title="Go to Test Page"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightbrown',
  },
});

export default TestPage;
