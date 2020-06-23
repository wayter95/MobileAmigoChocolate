import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        alignSelf: 'stretch',
        paddingHorizontal:10
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
    labelfix:{
        paddingTop:30,
        fontSize: 16,
        fontWeight:'bold'
    },
    labelDd: {
        fontSize: 20,
        fontWeight:'bold',
        color:'#515151'
    },
    rodape:{
        paddingTop:100,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    editPerfil:{
        backgroundColor:'#515151',
        borderRadius:20,
        height:40,
        alignItems: "center",
        alignContent: "center",
        width:200,
        justifyContent:'center'
    },
    textEP:{
        color:'#FFFFFF',
        fontSize:20,
    },
    wishList:{
        borderRadius:20,
        height:40,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#510B01",
        width:200,
        justifyContent:'center'
    },
    textWL:{
        color:'#FFFFFF',
        fontSize:20,
    },
}) 