import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, FlatList,AsyncStorage } from 'react-native';

import styles from './style';

export default function Groups() {
    const navigation = useNavigation();
    const [groups, setGroups] = useState([]);

    async function loadGroups() {
        const response = await api.get('/allgroups')
        setGroups(response.data);
        console.log(response.data)
    }
    useEffect(() => {
        loadGroups();
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" size={30} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Encontre um Grupo</Text>
            </View>
            <View style={styles.myGroupList}>
                <View style={styles.listHeader}>
                    <TouchableOpacity style={styles.btnAddGroup} onPress={() => navigation.navigate('NewGroup')}>
                        <Text style={styles.textAddGroup}>Criar Grupo</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.groupList}
                    showsVerticalScrollIndicator={false}
                    data={groups}
                    keyExtractor={group => group._id}
                    renderItem={({item}) => (
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