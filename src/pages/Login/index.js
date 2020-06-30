import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import styles from './style';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleSubmit() {
        const data = {
            email, password
        };

        try {
            const response = await api.post('/login', data);

            const {id,token} = response.data;
            await AsyncStorage.setItem('@AmigoChocolate:userId',id);
            await AsyncStorage.setItem('@AmigoChocolate:token',token);
          
            
            navigation.navigate('Home')

        } catch (err) {
            alert('Usuario ou senha incorreta tente novamente!');
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.Login}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.slogan}>
                    Faça o dia de alguém mais delicioso
                </Text>
            </View>
            <Text style={styles.label}>E-mail: *</Text>
            <TextInput style={styles.input}
                placeholder="Digite seu E-mail:"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail} />

            <Text style={styles.label}>Senha: *</Text>
            <TextInput style={styles.input}
                placeholder="Digite sua senha:"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword} />

            <TouchableOpacity onPress={handleSubmit} style={styles.buttonEntrar}>
                <Text style={styles.textButtonEntrar}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttonRegister}>
                <Text style={styles.textButtonRegister}>Nao tenho registro! Cadastrar?</Text>
            </TouchableOpacity>
        </View>
    );
}