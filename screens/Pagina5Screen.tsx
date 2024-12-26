import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina5Screen() {
    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)
    function aumentar(){
        setnumero1(numero1+1)
        setnumero2(numero2+1)
    }
  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Button title='<=' onPress={()=>setnumero1(numero2-1)}/>
        <Text style={styles.txt}>{numero1}</Text>
        <Button title='=>' onPress={()=>aumentar()}/>
      </View>

      <View style={styles.fila}>
        <Button title='<=' onPress={()=>setnumero2(numero2-1)}/>
        <Text style={styles.txt}>{numero2}</Text>
        <Button title='=>' onPress={()=>aumentar()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    fila:{
        flexDirection:'row'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        fontSize:30
    }
})