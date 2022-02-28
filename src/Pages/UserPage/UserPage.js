import React, {useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UserPage = ({navigation, route}) => {
  const {userId, userName} = route.params;
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>User Id: {userId}</Text>
      <Text>User Name: {userName}</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Go to Test Page"
        onPress={() => navigation.navigate('TestPage')}
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

export default UserPage;
