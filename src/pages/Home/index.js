import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './style';

import Logo from '../../assets/logo.png';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={Logo} />
                <TouchableOpacity onPress={() => navigation.navigate('Groups')}>
                    <Feather name="search" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Feather name="user" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Feather name="log-out" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
}