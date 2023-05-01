import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('https://cloud.vallarismaps.com/core/api/utilities/1.0/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })

        const data = await response.json()
        if (data.code != '401') {
           
            Alert.alert(
                'ok', 'login success', [
                { text: 'OK', onPress: () => console.log('login success') },
            ]);
            navigation.navigate('map')
        } else {
            Alert.alert(
                'Error', data.description, [
                { text: 'OK', onPress: () => console.log('login failed') },
            ]);
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.headerText}>
                EXAMINATION
            </Text>
            <TextInput
                style={style.input}
                label="Email"
                mode='outlined'
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder='Enter your email...'
            />
            <TextInput
                style={style.input}
                label="Password"
                mode='outlined'
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder='Enter your Password...'
            />
            <Button
                style={style.button}
                onPress={handleLogin}
                mode="contained"
            >
                Login
            </Button>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff'
    },
    headerText: {
        fontSize: 30,
        color: '#00B5CD'
    },
    input: {
        width: 300,
        marginTop: 10,

    },
    button: {
        width: 300,
        marginTop: 15,
        backgroundColor: '#4823B6'
    }

})

export default HomeScreen;