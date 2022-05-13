import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {POKEMON_FRONT_DEFAULT_PATH} from '../configs/api';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemon} from '../redux/actions/pokemon';
import BaseStats from '../components/BaseStats';

const PokemonDetail = ({route}) => {
  const {color, pokemonId, pokemonName} = route.params;
  const dispatch = useDispatch();
  const store = useSelector(state => state.pokemons);
  const pokemon = store?.pokemonData;
  const pokemonStats = pokemon.stats;
  useEffect(() => {
    dispatch(getPokemon(pokemonId));
  }, []);
  return (
    <View style={styles.container(color)}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.title}>{pokemonName}</Text>
          <Text style={styles.subtitle}>#{pokemonId}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.imageCard}>
          <Image
            style={styles.image}
            source={{
              uri: `${POKEMON_FRONT_DEFAULT_PATH}/${pokemonId}.png`,
            }}
          />
        </View>
        <View style={styles.baseStats}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={pokemonStats}
            renderItem={({item}) => <BaseStats item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    flex: 1,
  }),
  header: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageCard: {
    position: 'absolute',
    top: -120,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseStats: {
    flex: 1,
    margin: 30,
    marginTop: 80,
  },
});
