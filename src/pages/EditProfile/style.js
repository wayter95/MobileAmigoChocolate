import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFFFFF'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    arrowLeft:{
        paddingLeft:20,
    },
    textHeader: {
        fontSize:26,
        paddingRight:40,
        fontWeight:'bold'
    },
    label: {
        fontSize: 16,
        padding: 20,
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#510B01',
        width: '90%',
        borderWidth: 1,
        color: '#510B01',
        height: 40,
        paddingHorizontal: 20,
    },
    buttonSalvar: {
        marginHorizontal:20,
        marginTop:30,
        borderRadius:20,
        height:45,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#510B01",
        width:300,
        alignSelf:'center',

    },
    textButtonSalvar: {
        color:'#FFFFFF',
        fontSize:30,
    },
    date:{
        marginLeft:20,
        width:200,
        borderRadius:5,
    },
})