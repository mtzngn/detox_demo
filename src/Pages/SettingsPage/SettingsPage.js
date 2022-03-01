import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingPage = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
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

export default SettingPage;
