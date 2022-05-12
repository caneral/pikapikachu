import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemon} from '../redux/actions/pokemon';

const Pokemons = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch, store.data.length]);

  console.log(store);
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
    padding: 20,
  },
});
