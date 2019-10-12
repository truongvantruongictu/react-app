import React,{Component} from 'react';
import{View,StyleSheet,FlatList,Linking} from 'react-native';
import ProductListItem from '../components/ProductListItem';
import axios from 'axios';


export default class Category extends Component{

  static navigationOptions = ({navigation}) =>{
    return {
       title:navigation.getParam('categoryName'),
    };
};


  constructor(props){
    super(props);
    this.state={
      products: []
    };
  }
  componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('categoryId');
    axios.get(`/products?category=${id}`)
    .then(res=>{
      this.setState({
        products:res.data
      })
    })
    .catch(error =>{
      console.error(error)
    })
  }

    
  
  render(){
    const {products}=this.state;
    const {navigation} = this.props;
    return(
     <FlatList
     style={styles.container}
     data={products}
     numColumns={2}
     renderItem={({item})=>
     <View style={styles.wrapper}>
       <ProductListItem product={item}
       onCall={()=>{Linking.openURL('tel:0965612597')}}
       onSms={()=>{Linking.openURL('sms:0965612597')}} 
       />
     </View>
     }
     keyExtractor={(item)=>`${item.id}`}
    //  contentContainerStyle={styles.container}
     />
    )
}}
const styles=StyleSheet.create({
  container : {
   flex :1,
   paddingHorizontal:8,
   paddingTop:16
   
  },
  wrapper:{
    flex:1,
    paddingHorizontal:8
  }
})