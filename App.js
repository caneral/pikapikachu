import {StyleSheet, StatusBar, Text, View} from 'react-native';
import React from 'react';
import Pokemons from './src/screens/Pokemons';
import {Provider} from 'react-redux';

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'white'} />
        <Pokemons />
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
