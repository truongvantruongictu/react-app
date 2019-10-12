import React,{Component} from 'react';
import {Image,View, Text, TouchableOpacity, StyleSheet} from'react-native';
import SkillImage from '../images/rau_lang_xao_toi.jpg';
export default function CartListItem(props){
    
    const {cart,_tru,_cong,cout} = props;
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={{uri:cart.images[0].url}} />
            <View style={styles.title}>
               <Text>{cart.name}</Text>
               <Text>{cart.price}</Text>
            </View>
            <View style={styles.sl}>
                <TouchableOpacity onPress={_tru}><Text style={styles.textsl}>-</Text></TouchableOpacity>
                <Text style={styles.textsl}>{cout}</Text>
                <TouchableOpacity onPress={_cong}><Text style={styles.textsl}>+</Text></TouchableOpacity>
            </View>

        </View>
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