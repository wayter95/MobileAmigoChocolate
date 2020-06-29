import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Text,FlatList } from 'react-native';

import styles from './style';

export default function Groups() {
    const navigation = useNavigation();
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