import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, TouchableOpacity, FlatList, Text } from 'react-native';
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
            <View style={styles.myGroupList}>
                <View style={styles.listHeader}>
                    <Text style={styles.textListHeader}>Meus Grupos</Text>
                    <TouchableOpacity style={styles.btnAddGroup} onPress={() => navigation.navigate('NewGroup')}>
                        <Text style={styles.textAddGroup}>Criar Grupo</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                style={styles.groupList}
                showsVerticalScrollIndicator={false}
                data={[1,2,3,4,5,6,7]}
                keyExtractor={group => String(group)}
                renderItem={() => (
                    <View>
                        <TouchableOpacity style={styles.groupBtn}>
                        <Text style={styles.groupTitle}>Amigos de Tapira</Text>
                        <Text style={styles.dateDraw}>Sorteio em 23/12/2020</Text>
                        <Text style={styles.groupMenbers}> <Feather name="user" size={16} /> 10/20 </Text>
                        </TouchableOpacity>
                    </View>
                )}/>
                
            </View>
        </View>
    );
}