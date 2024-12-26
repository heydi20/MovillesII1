import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Tarjeta3({ item }:any) { 
  return (
    <View style={styles.card}>
      <Text>{item.name.first}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.images.main }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    height: 120, 
    width: 120, 
    resizeMode: "contain", 
    borderRadius: 50 
  },
});
