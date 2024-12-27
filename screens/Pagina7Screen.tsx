import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function KelvinToTempScreen() {
    const [kelvin, setKelvin] = useState(0);
    const [input, setInput] = useState('');
    const [celsius, setCelsius] = useState("0.00");
    const [fahrenheit, setFahrenheit] = useState("0.00");

    const handleCalculate = () => {
        const evaluarKelvin = parseFloat(input);
        if (evaluarKelvin < 0) {
            Alert.alert("ERROR", "Por favor ingresa un valor válido (mayor o igual a 0).");
            return;
        }

        setKelvin(evaluarKelvin);

        const evaluarCelsius = evaluarKelvin - 273.15;
        const evaluarFaherenheit = evaluarCelsius * 9 / 5 + 32;

        setCelsius(evaluarCelsius.toFixed(2));
        setFahrenheit(evaluarFaherenheit.toFixed(2));

        if (evaluarCelsius > 100) {
            Alert.alert("Advertencia", "Se ha superado la temperatura de ebullición del agua (100°C).");
        }
    };

    return (
        <ImageBackground
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/6045.jpg" }}
            style={styles.img}
            resizeMode="cover" 
        >
            <View style={styles.container}>
                <Text style={styles.title}>TEMPERATURAS</Text>
                <TextInput
                    placeholder='Ingresar temperatura'
                    keyboardType='numeric'
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                />
                <Button title='Calcular' color={'purple'} onPress={handleCalculate} />

                <View style={styles.linea} />
                <Text style={styles.subtitle}>Temperatura en Celsius: {celsius}°C</Text>
                <Text style={styles.subtitle}>Temperatura en Fahrenheit: {fahrenheit}°F</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color:'white'
    },
    input: {
        fontSize: 30,
        height: 50,
        width: '50%',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    linea: {
        width: "90%",
        height: 5,
        margin: 10,
        backgroundColor: 'white',
    },
    img: {
        flex: 1,
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
        color:'white'
    },
});
