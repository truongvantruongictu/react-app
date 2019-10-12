import React,{Component} from 'react';
import axios from 'axios';
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Linking} from 'react-native';
export default class InfosScreen extends Component{
    static navigationOptions = {
        title:'Thông tin ứng dụng'
    }


    constructor(props){
        super(props);
        this.state = {
            infos : []
        };
    }
    componentDidMount(){
      axios.get('/infos')
      .then(res=>{
        this.setState({
          infos:res.data
        })
      })
      .catch(error =>{
        console.error(error)
      })
    }

    render(){
        const {infos} = this.state;
        
        return(
            <View style={styles.container}>
              <View style={styles.title}><Text style={{fontSize:40,color:'#fff'}}>Cơm Sinh Viên</Text></View>
              
            <FlatList style={styles.flat}
              data={infos}
              renderItem={({item}) => (
                <View>
                  <Text style={{fontSize:20,marginTop:5}}>Thông tin</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={()=>{Linking.openURL(`${item.Facebook}`)}} >
                  <View style={styles.container1}>
                  <Text style={styles.title1}>Facebook:{item.Facebook}</Text>
                 </View>
                 </TouchableOpacity>

                 <TouchableOpacity activeOpacity={0.5} onPress={()=>{Linking.openURL(`mailto:${item.Email}`)}}  >
                  <View style={styles.container1}>
                  <Text style={styles.title1}>Email:{item.Email}</Text>
                 </View>
                 </TouchableOpacity>

                 <TouchableOpacity activeOpacity={0.5} onPress={()=>{Linking.openURL(`sms:${item.SMS}`)}} >
                  <View style={styles.container1}>
                  <Text style={styles.title1}>SMS:{item.SMS}</Text>
                 </View>
                 </TouchableOpacity>

                 <TouchableOpacity activeOpacity={0.5} onPress={()=>{Linking.openURL(`tel:${item.Phone}`)}} >
                  <View style={styles.container1}>
                  <Text style={styles.title1}>Phone:{item.Phone}</Text>
                 </View>
                 </TouchableOpacity>

                 <View style={styles.container1}>
                  <Text style={styles.title1}>{item.info}</Text>
                 </View>

        
                </View>
              )}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        )
    }
}
const styles =StyleSheet.create({
  container:{
      flex:1,
      alignItems:'stretch',
      padding:6,
      borderRadius:4,
      backgroundColor:'#FFF',
      shadowColor:'#000',
      shadowOpacity:0.1,
      shadowRadius:10,
      shadowOffset:{width:0,height:0},
      margin:10
  }, 

  title:{
     height:150,
      backgroundColor:'#FF8000',
      alignItems:'center',
      color:'#fff',
      justifyContent:'center',
  },
  flat:{
   flex:1,
   backgroundColor:'#fff'
  },

  container1:{
    alignItems:'center',
    padding:16,
    borderRadius:4,
    backgroundColor:'#FFF',
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowRadius:10,
    shadowOffset:{width:0,height:0},
    margin:5
},
title1:{
    textTransform:'uppercase',
    marginBottom: 8,
    fontWeight:'700'
}
})