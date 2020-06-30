import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, TouchableOpacity, FlatList, Text, AsyncStorage } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './style';

import api from '../../services/api'

import Logo from '../../assets/logo.png';

export default function Home() {
    const navigation = useNavigation();
    const [groups, setGroups] = useState([]);
    const [userId,setUserId] = useState();
    async function getUser() {
        const userId = await AsyncStorage.getItem('@AmigoChocolate:userId');

        setUserId(userId);
    }
    async function loadGroups() {
        const response = await api.get('/groups', {
            headers: {
                id: userId
            }
        })
        setGroups(response.data);
    }
    useEffect(() => {
        getUser();
        loadGroups();
    }, [userId])
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
                    data={groups}
                    keyExtractor={group => group._id}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity style={styles.groupBtn}>
                                <Text style={styles.groupTitle}>{item.name}</Text>
                                <Text style={styles.dateDraw}>{item.drawDate}</Text>
                                <Text style={styles.groupMenbers}> <Feather name="user" size={16} /> {item.membersCount}/20 </Text>
                            </TouchableOpacity>
                        </View>
                    )} />

            </View>
        </View>
    );
}