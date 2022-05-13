import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemon, searchPokemons} from '../redux/actions/pokemon';
import SearchBox from '../components/SearchBox';

const Pokemons = ({navigation}) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.pokemons);
  const pokemons = store?.data;
  const searchData = store?.searchData;

  const loading = store?.loading;
  const [searchTerm, setSearchTerm] = useState('');

  // For InfiniteScroll
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log('Caner', typeof searchTerm);
    searchTerm
      ? dispatch(searchPokemons(searchTerm))
      : dispatch(getAllPokemon(limit, offset));
  }, [offset, searchTerm]);

  const getMorePokemon = () => {
    !searchTerm && setOffset(offset + 20);
  };

  const footerIndicator = () => {
    return loading && !searchTerm ? (
      <View
        style={{
          paddingVertical: 20,
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Pika Pikachu App</Text>
        <Text>Search for a pokemon you want.</Text>
      </View>
      <SearchBox placeholder="Search Pokemon" onChangeText={setSearchTerm} />
      <View style={styles.pokemons}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchTerm ? searchData : pokemons}
          renderItem={({item}) => <Card item={item} navigation={navigation} />}
          numColumns={2}
          onEndReached={getMorePokemon}
          ListFooterComponent={footerIndicator}
          onEndReachedThreshold={0.9}
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
