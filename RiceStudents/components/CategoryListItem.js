import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import SkillImage from '../images/icecream.png';

export default function CategoryListItem(props) {
    const {category,onPress} =props;
  
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
             <View style={styles.container}>
             <Text style={styles.title}>{category.name}</Text>
             <Image source={{uri:category.images[0].url}} style={styles.categoryImage} />
      </View>
        </TouchableOpacity>
    
    );
  }

const styles=StyleSheet.create({
    categoryImage : {
        width:64,
        height:64,
        
    },
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginBottom:16
    },
    title:{
        textTransform:'uppercase',
        marginBottom: 8,
        fontWeight:'700'
    }

  });