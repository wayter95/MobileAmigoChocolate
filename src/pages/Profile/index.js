import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text,FlatList } from 'react-native';

import styles from './style';

export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" size={30} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Perfil do Usuario</Text>
            </View>

            <Text style={styles.labelfix}>Nome:</Text>
            <Text style={styles.labelDd}>Wayter</Text>
            <Text style={styles.labelfix}>E-Mail:</Text>
            <Text style={styles.labelDd}>wayter@email.com</Text>
            <Text style={styles.labelfix}>Data de Nascimento:</Text>
            <Text style={styles.labelDd}>16/02/1995</Text>


            <View style={styles.rodape}>
                <TouchableOpacity style={styles.editPerfil} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.textEP}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wishList} onPress={()=> navigation.navigate('WishList')}>
                    <Text style={styles.textWL}>Lista de desejo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}