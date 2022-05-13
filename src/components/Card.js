import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {POKEMON_FRONT_DEFAULT_PATH} from '../configs/api';
import {useState} from 'react';

const Card = ({item, navigation}) => {
  const url = item.url;
  const pokemonId = url.split('/').slice(6, 7).toString();
  const pokemonName =
    item.name.charAt(0).toUpperCase() +
    (item.name.length > 10 ? item.name.slice(1, 9) : item.name.slice(1));

  const [color, setColor] = useState();

  const colors = ['#49d0b0', '#fc6c6d', '#ffd76f', '#76befe'];

  const randomColor = () => {
    var colorIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    var color = colors[colorIndex];
    return color;
  };

  useEffect(() => {
    setColor(randomColor());
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetail', {color, pokemonId, pokemonName})}
      style={styles.card(color || 'white')}>
      <View>
        <Text style={styles.subtitle}>#{pokemonId}</Text>
        <Text style={styles.title}>{pokemonName}</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: `${POKEMON_FRONT_DEFAULT_PATH}/${pokemonId}.png`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: randomColor => ({
    marginVertical: 10,
    padding: 5,
    backgroundColor: randomColor,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    margin: 4,
    height: 80,
  }),
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  image: {
    width: 70,
    height: 70,
  },
});
