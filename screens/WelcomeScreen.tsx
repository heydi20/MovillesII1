import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/15601.jpg' }} // Cambia esta URL por la ruta de tu imagen
      style={styles.background}
      resizeMode="cover" // Ajusta la imagen al tamaño del contenedor
    >
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.info}>Nombre: {'Heydi Herrera'}</Text>
        <Text style={styles.info}>Carrera: {'Desarrollo de software'}</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="IR A BOTTOM"
            onPress={() => navigation.navigate("Botton")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Cambia el color a blanco para mayor contraste
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
    color: '#fff', // Cambia el color a blanco para mayor contraste
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
});
