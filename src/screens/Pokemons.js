import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const Pokemons = () => {
  return (
    <View>
      <Text>Pokemons</Text>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
    container: {
        padding:20,
    }
});
