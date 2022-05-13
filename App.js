import {StyleSheet, StatusBar, View} from 'react-native';
import React from 'react';
import PokemonStack from './src/navigation/PokemonStack';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} backgroundColor={'#f6f8fc'} />
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
