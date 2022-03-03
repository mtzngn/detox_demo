import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', password: '', submitted: false};

    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onNameChange(text) {
    this.setState({name: text});
  }
  onPasswordChange(text) {
    this.setState({password: text});
  }
  handleSubmit() {
    this.setState({submitted: true});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>

        {!this.state.submitted ? (
          <SafeAreaView style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onNameChange(text)}
              value={this.state.name}
              placeholder="Name"
              testID="nameInput"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => this.onPasswordChange(text)}
              value={this.state.password}
              placeholder="Password"
              testID="passwordInput"
            />
            <TouchableOpacity
              style={styles.submit}
              onPress={() => this.handleSubmit()}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </SafeAreaView>
        ) : (
          <SafeAreaView style={styles.submitted}>
            <Text>SUCCESS!</Text>
            <Icon name="rocket" size={30} color="#000" style={styles.icon} />
          </SafeAreaView>
        )}
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
  input: {
    backgroundColor: 'lightblue',
    height: 40,
    width: 200,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  submit: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
  },
  submitted: {
    display: 'flex',
    alignItems: 'center',
    margin: 50,
  },
  icon: {
    margin: 20,
  },
});

export default SettingScreen;
