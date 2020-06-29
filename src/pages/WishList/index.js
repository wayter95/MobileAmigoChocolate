import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

import styles from './style';

export default function WishList() {
    const navigation = useNavigation();
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
                    placeholderTextColor="#999" />

                <Text style={styles.label}>Descrea oque deseja ganhar: *</Text>
                <TextInput style={styles.input}
                    placeholder="Sou alergico a amendoim..."
                    placeholderTextColor="#999" />
                <TouchableOpacity style={styles.salvarWish}>
                    <Feather name="plus" size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.wishList}>
                <View style={styles.dWishList}>
                    <Text style={styles.wishTitle}>Choloate Amargo</Text>
                    <Text style={styles.wishDescription}>Sou Apaixonado por chocolate amargo</Text>
                </View>

                <View style={styles.dWishList}>
                    <Text style={styles.wishTitle}>Suflair</Text>
                    <Text style={styles.wishDescription}>Barra de chocolate de suflair</Text>
                </View>

                <View style={styles.dWishList}>
                    <Text style={styles.wishTitle}>Trufas</Text>
                    <Text style={styles.wishDescription}>Trufas caseiras de brigadeiro</Text>
                </View>
            </View>
        </View>
    );
}