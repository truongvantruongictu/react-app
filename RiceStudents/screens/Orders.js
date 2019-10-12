import React,{Component} from 'react';
import axios from 'axios';
import {View,FlatList,StyleSheet} from 'react-native';
import CamNangListItem from '../components/CamNangListItem';
export default class Orders extends Component{
    constructor(props){
        super(props);
        this.state={
            Camnang:[],
        }
    }
    static navigationOptions = {
        title:'Cẩm nang'
    };

    componentDidMount(){
        axios.get('/camnang')
        .then(res=>{
          this.setState({
            Camnang:res.data
          })
        })
        .catch(error =>{
          console.error(error)
        })
      }
    render(){
        const {navigation} = this.props;
        const {Camnang} =this.state;
       
        return(
            <View style={styles.container}>
                <FlatList
                style={styles.flatlist}
                data={Camnang}
                renderItem={({item}) =><CamNangListItem camnang={item}
                onPress={()=>navigation.navigate('Chitietbvcn',{
                    categoryName: item.name,
                    categoryId:item.id,
                  })}
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
    total:{
        height:40,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        
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