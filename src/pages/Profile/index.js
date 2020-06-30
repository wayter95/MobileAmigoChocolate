import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, AsyncStorage } from 'react-native';

import styles from './style';
import api from '../../services/api';

export default function Profile() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthday] = useState();
    const navigation = useNavigation();

    const [userId, setUserId] = useState();

    async function getUser() {
        const userId = await AsyncStorage.getItem('@AmigoChocolate:userId');

        setUserId(userId);
    }
    async function getProfile() {
        const response = await api.get('/users', {
            headers: {
                id: userId
            }
        })
        setName(response.data.name);
        setEmail(response.data.email);
        setBirthday(response.data.birthday);
    }
    useEffect(() => {
        getUser();
        getProfile();
    }, [userId])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" size={30} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Perfil do Usuario</Text>
            </View>

            <Text style={styles.labelfix}>Nome:</Text>
            <Text style={styles.labelDd}>{name}</Text>
            <Text style={styles.labelfix}>E-Mail:</Text>
            <Text style={styles.labelDd}>{email}</Text>
            <Text style={styles.labelfix}>Data de Nascimento:</Text>
            <Text style={styles.labelDd}>{birthday}</Text>


            <View style={styles.rodape}>
                <TouchableOpacity style={styles.editPerfil} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.textEP}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wishList} onPress={() => navigation.navigate('WishList')}>
                    <Text style={styles.textWL}>Lista de desejo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}