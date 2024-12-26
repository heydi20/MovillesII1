import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/series.json'
import Tarjeta2 from '../components/Tarjeta2'

export default function Pagina4Screen() {
  return (
    <View>
        <Text style={styles.header}>SERIES</Text>
        <FlatList 
            data={datos.series}
            renderItem={ ( {item} ) => 
                <Tarjeta2 series ={item} />
            } 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32, // Tamaño grande
        fontWeight: 'bold', // Negrilla
        textAlign: 'center', // Centrar el texto
        marginVertical: 20, // Espaciado arriba y abajo
        color: '#333', // Color del texto
    },
})