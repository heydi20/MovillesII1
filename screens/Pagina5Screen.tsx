import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina5Screen() {
    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)

    useEffect(() => {
      if(numero1<0){
        Alert.alert("ERROR")
        setnumero1(0)
      }

      if(numero2<0){
        Alert.alert("Error")
        setnumero2(0)
      }
    
    }, [numero1,numero2])

    function aumentar(){
     setnumero1(numero1+1)
     
    }
    
  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Button title='<=' onPress={()=>setnumero1(numero1-1)}/>
        <Text style={styles.txt}>{numero1}</Text>
        <Button title='=>' onPress={()=>aumentar()}/>
      </View>

      <View style={styles.fila}>
        <Button title='<=' onPress={()=>setnumero2(numero2-1)}/>
        <Text style={styles.txt}>{numero2}</Text>
        <Button title='=>' onPress={()=>aumentar()}/>
      </View>

      <View style={styles.linea}/>
      <Text style={styles.txt}>SUMA:{numero1+numero2}</Text>
      <Text style={styles.txt}>RESTA:{numero1-numero2}</Text>
      <Text style={styles.txt}>MULTIPLICACIÓN:{numero1*numero2}</Text>

      
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
    },
    linea:{
      width:"90%",

    }
})