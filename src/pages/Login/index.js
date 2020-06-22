import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Image, Text,TextInput,TouchableOpacity } from 'react-native';


import logo from '../../assets/logo.png';
import styles from './style';

export default function Login() {
    const navigation = useNavigation();
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
                autoCorrect={false}/>

                <Text style={styles.label}>Senha: *</Text>
                <TextInput style={styles.input} 
                placeholder="Digite sua senha:"
                placeholderTextColor="#999"
                secureTextEntry={true}/>

                <TouchableOpacity style={styles.buttonEntrar}>
                    <Text style={styles.textButtonEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}>Nao tenho registro! Cadastrar?</Text>
                </TouchableOpacity>
        </View>
    );
}