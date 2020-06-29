import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,Text,TouchableOpacity,TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import DatePicker from 'react-native-datepicker';

import styles from './style'

export default function EditProfile(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.navigate('Profile')}>
                <Feather name="arrow-left" size={30} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Editar Perfil</Text>
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
        </View>
    )
}