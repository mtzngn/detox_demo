import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class UserScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      headerRight: () => (
        <Button
          //you can't call set state in here cause --this-- is not refering to userscreen in here
          onPress={navigation.getParam('increaseCount')}
          title="Info"
          color="#fff"
        />
      ),
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>User Screen</Text>
        <Text>count {this.state.count}</Text>
        <Button
          title="Go Back with pop"
          onPress={() => this.props.navigation.pop()}
        />
        <Button
          title="Go to main with pop to top"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({otherParam: 'Updated!'})
          }
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

export default UserScreen;
