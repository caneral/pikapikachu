import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemon} from '../redux/actions/pokemon';

const Pokemons = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.pokemons);
  const pokemons = store.data.results;

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch, pokemons?.length]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Pika Pikachu App</Text>
        <Text>Search for a pokemon you want.</Text>
      </View>
      <View style={styles.pokemons}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pokemons}
          renderItem={({item}) => <Card item={item} />}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
  },
  headerTitle: {
    fontWeight: '900',
    fontSize: 28,
    color: 'black',
  },
  pokemons: {
    flex:1
  }
});
