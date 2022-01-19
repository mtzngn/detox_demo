import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(prev => ++prev);
  };
  const handleDecrease = () => {
    console.log('you have tapped');
    setValue(prev => --prev);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity style={styles.tapMe} onPress={handleIncrease}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tapMe} onPress={handleDecrease}>
          <Text>Decrease</Text>
        </TouchableOpacity>
        <Text>Current Value is : {value}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tapMe: {
    marginLeft: 10,
    width: 100,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default Counter;
