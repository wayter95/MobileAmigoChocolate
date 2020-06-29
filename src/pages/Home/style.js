import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:Constants.statusBarHeight + 20,
        backgroundColor:'#FFFFFF'
    },
    logo:{
        width:100,
        height:60,
        resizeMode: "contain",
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    myGroupList:{
        backgroundColor:'#EEEEEE',
        flex:1,
    },
    listHeader:{
        flexDirection:'row',
        marginHorizontal:20,
        paddingTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    textListHeader:{
        fontSize:20,
        fontWeight:'bold',
        paddingRight:40,
        justifyContent:'center'
    },
    btnAddGroup:{
        backgroundColor:'#515151',
        height:40,
        width:150,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'

    },
    textAddGroup:{
        color:'#FFFFFF',
        fontSize:20,
        fontWeight:'bold'
    },
    groupList:{
        marginTop:20
    },
    groupBtn:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginHorizontal:24,
        marginBottom:16
    },
    groupTitle:{
        fontSize:20,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:"center",
        alignContent:'center'
    },
    dateDraw:{
        paddingTop:16
    },
    groupMenbers:{
        position:'absolute',
        alignSelf:'flex-end',
        paddingRight:20,
        paddingTop:24
    }

})