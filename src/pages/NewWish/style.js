import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        alignSelf: 'stretch',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
}) 