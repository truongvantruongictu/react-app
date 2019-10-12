import React,{Component} from 'react';
import {Image,View, Text, TouchableOpacity, StyleSheet} from'react-native';
export default function CamNangListItem(props){
    
    const {chitiet} = props;
    return(
       
        <View style={styles.container}>
            {/* <Image style={styles.img} source={{uri:chitiet.images[0].url}} /> */}
            <View style={styles.title}>
               <Text>{chitiet.noidung}</Text>
            </View>
        </View>
        
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
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
        color:'#000',
    },
})