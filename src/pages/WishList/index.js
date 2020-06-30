import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, TextInput, AsyncStorage, FlatList } from 'react-native';

import styles from './style';
import api from '../../services/api';

export default function WishList() {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [userId, setUserId] = useState();
    const [wishis, setWish] = useState([]);

    async function handleSubmit() {
        const data = {
            name, description
        }
        getUser();
        try{
        await api.post('/wishlist', data, {
            headers: {
                id: userId
            }
        });
        alert('Seu item foi adicionado a lista de desejo...')
    }catch(err){
        alert('Erro ao adicionar item a lista de desejo tente novamente!')
    }
    }
    async function getUser() {
        const userId = await AsyncStorage.getItem('@AmigoChocolate:userId');

        setUserId(userId);
    }
    async function getWishi() {
        const response = await api.get('/wishlist', {
            headers: {
                id: userId,
            }
        })
        setWish(response.data)
    }
    useEffect(() => {
        getUser();
        getWishi();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.navigate('Profile')}>
                    <Feather name="arrow-left" size={30} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Lista de desejo</Text>
            </View>
            <View style={styles.createWish}>
                <Text style={styles.label}>Seu desejo: *</Text>
                <TextInput style={styles.input}
                    placeholder="Sonho de valsa, bis, etc..."
                    placeholderTextColor="#999"
                    value={name}
                    onChangeText={setName} />

                <Text style={styles.label}>Descrea oque deseja ganhar: *</Text>
                <TextInput style={styles.input}
                    placeholder="Sou alergico a amendoim..."
                    placeholderTextColor="#999" 
                    value={description}
                    onChangeText={setDescription}/>

                <TouchableOpacity onPress={handleSubmit} style={styles.salvarWish}>
                    <Feather name="plus" size={30} />
                </TouchableOpacity>
            </View>
            <FlatList style={styles.wishList}
                showsVerticalScrollIndicator={false}
                data={wishis}
                keyExtractor={wishi => wishi._id}
                renderItem={({ item }) => (
                    <View style={styles.dWishList}>
                        <Text style={styles.wishTitle}>{item.name}</Text>
                        <Text style={styles.wishDescription}>{item.description}</Text>
                    </View>
                )} />
        </View>
    );
}