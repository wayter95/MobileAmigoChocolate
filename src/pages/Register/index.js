import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './style';

export default function Register() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Login}>
                <Text style={styles.slogan}>
                    Crie uma conta e se delicie com nosso app
                </Text>
            </View>
            <Text style={styles.label}>Nome: *</Text>
            <TextInput style={styles.input}
                placeholder="Digite seu nome:"
                placeholderTextColor="#999" />

            <Text style={styles.label}>E-mail: *</Text>
            <TextInput style={styles.input}
                placeholder="Digite seu E-mail:"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} />

            <Text style={styles.label}>Senha: *</Text>
            <TextInput style={styles.input}
                placeholder="Digite sua senha:"
                placeholderTextColor="#999"
                secureTextEntry={true} />

            <Text style={styles.label}>Data de Nascimento: *</Text>
            <DatePicker style={styles.date}
                format="DD/MM/YYYY"
            />

            <TouchableOpacity style={styles.buttonSalvar}>
                <Text style={styles.textButtonSalvar}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonVoltar}>
                <Text style={styles.textButtonVoltar}>Já tenho registro! Fazer login?</Text>
            </TouchableOpacity>
        </View>
    );
}