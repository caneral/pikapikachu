import {StyleSheet, StatusBar, View} from 'react-native';
import React from 'react';
import PokemonStack from './src/navigation/PokemonStack';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} />
      <PokemonStack />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
