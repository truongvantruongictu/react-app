import React,{Component} from 'react';
import axios from 'axios';
import {View,FlatList,StyleSheet} from 'react-native';

import Chitietbaiviet from '../components/Chitietbaiviet';
export default class Chitietbvcn extends Component{
    static navigationOptions = ({navigation}) =>{
        return {
           title:navigation.getParam('categoryName'),
        };
    };
    constructor(props){
        super(props);
        this.state={
            Chitiet:[],
        }
    }
   

    componentDidMount(){
     const {navigation} = this.props;
     const id = navigation.getParam('categoryId');
    axios.get(`/chitiet?camnang=${id}`)
        .then(res=>{
          this.setState({
            Chitiet:res.data
          })
        })
        .catch(error =>{
          console.error(error)
        })
      }
    render(){
       
        const {Chitiet} =this.state;
       
        return(
            <View style={styles.container}>
                <FlatList
                style={styles.flatlist}
                data={Chitiet}
                renderItem={({item}) =><Chitietbaiviet chitiet={item}
                />}
                
                keyExtractor={(item)=>`${item.id}`}
                />

            </View>
           
            
            
        )
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    flatlist:{
        flex:8,
    },
    text:{
        flex:1,
        fontWeight:'bold',
        fontSize:15,
        padding:10
    },
    dh:{
        backgroundColor:'green',
        alignItems:'flex-end',

    }
})