import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const SearchBox = props => {
  return (
    <View style={styles.search}>
      <TextInput style={styles.searchInput} {...props} />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 10,
    paddingLeft: 20,
  },
  search: {
    marginVertical: 15,
    marginHorizontal: 5,
  },
});
