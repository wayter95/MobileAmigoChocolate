import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:Constants.statusBarHeight + 20,
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
    }
})