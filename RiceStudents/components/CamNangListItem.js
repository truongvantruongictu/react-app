import React,{Component} from 'react';
import {Image,View, Text, TouchableOpacity, StyleSheet} from'react-native';
export default function CamNangListItem(props){
    
    const {camnang,onPress} = props;
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
            <Image style={styles.img} source={{uri:camnang.images[0].url}} />
            <View style={styles.title}>
               <Text>{camnang.name}</Text>
            </View>
        </View>
        </TouchableOpacity>
        
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:6,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        
        margin:10
    }, 
    img:{
        flex:3,
        width:30,
        height:50,
        
    },
    title:{
        flex:6,
        width:50,
        height:50,
        color:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    sl:{
        width:50,
        height:50,
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    textsl:{
        padding:5,
        fontSize:15,
        fontWeight:'bold'
    }
})