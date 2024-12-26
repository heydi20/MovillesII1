import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/crash.json'
import Tarjeta from '../components/Tarjeta'

export default function Pagina3Screen() {
  return (
    <View>
      <Text style={styles.title}>PERSONAJES</Text>
      <FlatList 
        data = {datos}
        renderItem={ ( {item} ) => 
            <Tarjeta informacion ={item} />
        } 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
})