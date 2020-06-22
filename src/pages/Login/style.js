import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 100,
        alignSelf: 'stretch',

    },
    login: {
        textAlign: "center"
    },
    logo: {
        width: 300,
        height: 100,
        alignSelf: 'center',
        resizeMode: "contain",
    },
    slogan: {
        paddingTop: 20,
        paddingHorizontal: 20,
        fontSize: 26,
        alignSelf: 'center',
        color: '#510B01'
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
    buttonEntrar: {
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
    buttonRegister: {
        alignItems: 'center',
        marginTop:50,
    },
    textButtonEntrar: {
        color:'#FFFFFF',
        fontSize:30,
    },
    textButtonRegister:{
        fontSize:20,
    }

});