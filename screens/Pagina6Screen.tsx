import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Tarjeta3 from '../components/Tarjeta3';

export default function Pagina6Screen() {
  const [datos, setDatos] = useState([]); // Inicializar como array vacío

  useEffect(() => {
    async function leer() {
      const resp = await fetch('https://api.sampleapis.com/futurama/characters');
      const json = await resp.json();
      setDatos(json);
    }
    leer();
  }, []); 

  return (
    <View>
      <Text>Pagina6Screen</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <Tarjeta3 item={item} /> 
        )}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({});
