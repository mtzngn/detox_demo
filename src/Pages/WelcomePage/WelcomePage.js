import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Page</Text>
      <Button
        title="Go to User Page"
        onPress={() =>
          navigation.navigate('UserPage', {userId: 1, userName: 'GOLLUM'})
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

export default WelcomePage;
