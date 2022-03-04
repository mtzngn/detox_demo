import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

const data = [
  {id: 1, name: 'Sir Gollum', location: 'Mordor'},
  {id: 2, name: 'Nazgul', location: 'Minas Morgul'},
  {id: 3, name: 'Frodo', location: 'Shire'},
  {id: 4, name: 'Sam', location: 'Shire'},
  {id: 5, name: 'Gandalf', location: 'Lorien'},
  {id: 6, name: 'Saruan', location: 'Dol Guldur Mordor'},
];

class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};

    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    this.props.navigation.setParams({
      onSearch: this.onSearch,
      search: this.search,
    });
  }

  onSearch(text) {
    this.setState({search: text});
  }
  static navigationOptions = ({navigation}) => {
    const onSearch = navigation.getParam('onSearch', () => {});
    const search = navigation.getParam('search', '');
    return {
      tabBarTestID: 'FeedTab',
      // title: 'Feed',
      headerTitle: () => (
        <TextInput
          style={styles.input}
          onChangeText={text => onSearch(text)}
          value={search}
          placeholder="Search..."
          testID="searchInput"
        />
      ),
    };
  };
  renderItem({item}) {
    return (
      <View style={styles.itemWrapper}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Feed Screen</Text>
        <FlatList
          data={data.filter(el => el.name.includes(this.state.search))}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
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
  input: {
    backgroundColor: 'lightgray',
    height: 30,
    width: 300,
    margin: 10,
    padding: 5,
    borderRadius: 15,
  },
  flatList: {
    width: '100%',
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  itemName: {
    padding: 5,
  },
  itemLocation: {
    padding: 5,
  },
});

export default FeedScreen;
