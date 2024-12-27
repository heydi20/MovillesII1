import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Tarjeta3 from '../components/Tarjeta3';

export default function Pagina6Screen() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    async function leer() {
      const resp = await fetch('https://api.sampleapis.com/futurama/characters');
      const json = await resp.json();
      setDatos(json);
    }
    leer();
  }, []);

  return (
    <ImageBackground
      source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/19.jpg" }}
      style={styles.img}
      //resizeMode="cover"
    >
      <View>
        <Text style={styles.title}>FUTURAMA</Text>
        <FlatList
          data={datos}
          renderItem={({ item }) => (
            <Tarjeta3 item={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  img: {
    flex: 1,
    //justifyContent: 'center',
},
});
