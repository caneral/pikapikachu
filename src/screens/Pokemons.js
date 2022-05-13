import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemon} from '../redux/actions/pokemon';

const Pokemons = ({navigation}) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.pokemons);
  const pokemons = store?.data;
  const [data, setData] = useState();

  // For InfiniteScroll
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(getAllPokemon(limit, offset));
    console.log('UseEffect çalıştı.');
  }, [dispatch, offset]);


  
  const getMorePokemon = () => {
    // setLimit(limit + 20);
    setOffset(offset + 20);
    console.log('GetMorePokemon');
  };

  console.log(offset);

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
          renderItem={({item}) => <Card item={item} navigation={navigation} />}
          numColumns={2}
          onEndReached={getMorePokemon}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerTitle: {
    fontWeight: '900',
    fontSize: 28,
    color: 'black',
  },
  pokemons: {
    flex: 1,
  },
});
