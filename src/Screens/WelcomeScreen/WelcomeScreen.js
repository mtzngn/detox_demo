import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to User Screen"
        onPress={() =>
          navigation.navigate('UserScreen', {userId: 1, userName: 'GOLLUM'})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default WelcomeScreen;
