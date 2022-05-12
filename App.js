import { StyleSheet, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Pokemons from './src/screens/Pokemons'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={'white'}/>
      <Pokemons/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})