import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';


export default class Category extends Component{
  constructor(props){
    super(props);
    this.state={
      products: [
        {
          id:1,
          images:[
            {
              url:
              'https://image.flaticon.com/icons/svg/1357/1357852.svg'
            }
          ],
          name:'Chicken',
          price:'40.000 VND'
        },
        {
          id:2,
          images:[
            {
              url:
              'https://image.flaticon.com/icons/svg/1357/1357875.svg'
            }
          ],
          name:'Mi Tom',
          price:'20.000 VND'
        }
      ]
    };
  }

    
  
 }
const styles=StyleSheet.create({
  container : {
    flex :1,
    alignItems:'center',
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#fff',
    paddingLeft:16,
    paddingRight:16

  }
})