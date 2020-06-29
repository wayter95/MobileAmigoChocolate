import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text,TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';


import styles from './style';

export default function NewGroup() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" size={30} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Novo Grupo</Text>
            </View>

            <Text style={styles.label}>Nome do grupo: *</Text>
            <TextInput style={styles.input}
                placeholder="Digite o nome do grupo:"
                placeholderTextColor="#999" />

            <Text style={styles.label}>Valor Minimo *</Text>
            <TextInput style={styles.input}
                placeholder="R$ 0,00:"
                placeholderTextColor="#999"
                keyboardType="decimal-pad" />

            <Text style={styles.label}>Valor Maximo: *</Text>
            <TextInput style={styles.input}
                placeholder="R$ 0,00:"
                placeholderTextColor="#999"
                keyboardType="decimal-pad"/>

            <Text style={styles.label}>Data do Sorteio: *</Text>
            <DatePicker style={styles.date}
                format="DD/MM/YYYY"
            />

            <TouchableOpacity style={styles.buttonSalvar}>
                <Text style={styles.textButtonSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}