import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './style';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [birthday, setBirthday] = useState(new Date());

    const navigation = useNavigation();

    async function handleSubmit() {
        const data = {
            name, email, password, birthday
        }
        try {
            const response = await api.post('/users', data)
            navigation.navigate('Login')
            alert(`Olá ${response.data.name} sua conta foi criada com sucesso, faça login para utilizar nosso app`)

        } catch (err) {
            alert('Erro no cadastro tente novamente')
        }

    }
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
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName} />

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

            <Text style={styles.label}>Data de Nascimento: *</Text>
            <DatePicker style={styles.date}
                mode="date"
                format="DD/MM/YYYY"
                minDate="01/01/1900"
                maxDate="01/01/2020"
                date={birthday}
                onDateChange={setBirthday}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.buttonSalvar}>
                <Text style={styles.textButtonSalvar}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonVoltar}>
                <Text style={styles.textButtonVoltar}>Já tenho registro! Fazer login?</Text>
            </TouchableOpacity>
        </View>
    );
}