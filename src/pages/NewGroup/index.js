import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text,TextInput ,AsyncStorage} from 'react-native';
import DatePicker from 'react-native-datepicker';


import styles from './style';
import api from '../../services/api';

export default function NewGroup() {
    const navigation = useNavigation();
    const [name,setName] = useState();
    const [minimumValue,setMinValue] = useState();
    const [maximunValue,setMaxValue] = useState();
    const [drawDate,setDrawDate] = useState(new Date());
    const [userId,setUserId] = useState();

    async function getUser() {
        const userId = await AsyncStorage.getItem('@AmigoChocolate:userId');

        setUserId(userId);
    }

    async function handleSubmit(){
        const data = {
            name,minimumValue,maximunValue,drawDate
        }
        getUser();
        try {
            const response = await api.post('/groups',data,{
                headers: {
                    id: userId,
                }
            })
            alert(`Grupo ${response.data.name} criado com sucesso...`)
            navigation.navigate('Home');

        }catch(err){
            alert('Ocorreu um erro tente novamente');
        }
    }
    
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
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName} />

            <Text style={styles.label}>Valor Minimo *</Text>
            <TextInput style={styles.input}
                placeholder="R$ 0,00:"
                placeholderTextColor="#999"
                keyboardType="decimal-pad"
                value={minimumValue}
                onChangeText={setMinValue} />

            <Text style={styles.label}>Valor Maximo: *</Text>
            <TextInput style={styles.input}
                placeholder="R$ 0,00:"
                placeholderTextColor="#999"
                keyboardType="decimal-pad"
                value={maximunValue}
                onChangeText={setMaxValue}/>

            <Text style={styles.label}>Data do Sorteio: *</Text>
            <DatePicker style={styles.date}
                format="DD/MM/YYYY"
                mode="date"
                date={drawDate}
                onDateChange={setDrawDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.buttonSalvar}>
                <Text style={styles.textButtonSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}