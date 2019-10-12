import React from 'react';
import{Image,StyleSheet,Text,Touchable,View,Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {formatPrice} from '../utils/Number';
export default function ProductListItem(props){
    const {product,onCall,onSms} =props;
    return (
        <View style={styles.shadow}>
           <View style={styles.container}>
           <Image style={styles.img} source={{uri:product.images[0].url}} />
              <View style={styles.info}>
                 <Text style={styles.name}>{product.name}</Text>
                 <View style={styles.priceRow}>
                     <Text style={styles.price}>{product.price}</Text>
                    
                     <TouchableOpacity onPress={onCall}>
                         <Text style={styles.carttext}>GỌI |</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={onSms}>
                         <Text style={styles.carttext}>| SMS</Text>
                     </TouchableOpacity>
                     
                    
                 </View>
                 <Text style={styles.price}>SDT:{product.phone}</Text>
              </View>
             
           </View>
        </View>
    )
}
const styles =StyleSheet.create({
    carttext:{
        textTransform:'uppercase',
        fontSize:16,
        color:'#2f95dc'
    },
    shadow:{
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0}
    },
    container:{
        marginBottom:20,
        borderRadius:4,
        backgroundColor:'#FFF',
        overflow:'hidden'
    },
    info:{
        padding:8
    },
    img:{
        height:150,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
    },
    name:{
        fontSize:16,
        marginBottom:8
    },
    priceRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    price:{
        fontSize:16,
        color:'#FF8000',
        flex:1
    }
})