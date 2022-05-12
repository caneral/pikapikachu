import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.card}>
      <Text>Card</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginVertical:10,
        padding:10,
        backgroundColor:'red',
        borderRadius: 8,
        
    }
})