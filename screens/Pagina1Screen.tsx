import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina1Screen({navigation}:any) {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState("")
  const [ciudad, setCiudad] = useState("")

  function datosAlert(){
    Alert.alert("Mensaje", nombre+ " es de "+ ciudad+ " y tiene "+ edad +" años.");
    setNombre(""); setEdad(""); setCiudad("");
  }


  return (
    <ImageBackground
      source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/5373.jpg" }}
      style={styles.img}
    >
      <View style={styles.contenedor}>
        <TextInput
          placeholder='INGRESAR NOMBRE'
          placeholderTextColor={'white'}
          style={styles.input}
          onChangeText={ (texto)=> setNombre(texto) }
          value={ nombre }
        />

        <TextInput
          placeholder='INGRESAR EDAD'
          style={styles.input}
          placeholderTextColor={'white'}
          keyboardType='numeric'
          onChangeText={ (texto)=> setEdad( texto )}
          value={ edad }
        />

        <TextInput
          placeholder='INGRESAR CIUDAD'
          style={styles.input}
          placeholderTextColor={'white'}
          onChangeText={ (texto)=> setCiudad(texto)}
        />

        <Button 
          title='ACEPTAR' 
          onPress={()=> datosAlert()}
          color={'purple'}
        />
        
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1
  },
  input: {
    fontSize: 30,
    height: 55,
    width: "80%",
    backgroundColor: "#222a24",
    opacity: 0.95,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal:20
    
  },
  contenedor:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:"99%"
  }
})