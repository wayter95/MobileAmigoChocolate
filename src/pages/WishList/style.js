import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        alignSelf: 'stretch',
        backgroundColor:'#FFFFFF'
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
    salvarWish: {
        marginVertical:20,
        height:50,
        alignItems: "center",
        alignContent: "center",
        width:50,
        alignSelf:'center',
        borderColor:'#000',
        borderWidth:2,
        borderRadius:30,
        justifyContent:'center'
    },
    wishList:{
        backgroundColor:'#EEEEEE',
        flex:1,
    },
    dWishList:{
        marginTop:20,
        backgroundColor:'#FFFFFF'
    },
    wishTitle:{
        alignSelf:'center',
        alignItems:'center',
        fontSize:30,
        fontWeight:'bold'
    },
    wishDescription:{
        alignSelf:'center',
        alignItems:'center',
        fontSize:20
    }
}) 