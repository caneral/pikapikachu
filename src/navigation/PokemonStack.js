import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Pokemons from '../screens/Pokemons';
import PokemonDetail from '../screens/PokemonDetail';

const Stack = createNativeStackNavigator();

const PokemonStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Pokemons" component={Pokemons} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PokemonStack;
