import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';
export default StyleSheet.create({
    container: {
        flex:1,
       paddingTop: Constants.statusBarHeight + 50,
       alignSelf:'stretch'
       
    },
    login:{
        textAlign:"center"
    },
    logo:{
        width: 300,
        height:100,
        alignSelf:'center',  
        resizeMode:"contain"   
    },
    slogan:{
        paddingTop:20,
        fontSize:26,
        alignSelf:'center',
        color:'#510B01'
    },
    label:{
        fontSize:16,
        padding:20,
        paddingBottom:5,
        fontWeight:'bold'
    },
    input:{
        alignSelf:'center',
        borderRadius:5,
        borderColor:'#510B01',
        width:'90%',
        borderWidth:1,
        color:'#510B01',
        height:40,
        paddingHorizontal: 20,   
    },
    entrar:{
       paddingTop:20, 
    },
    register:{
        paddingBottom:20,
    }

});