import React,{Component} from 'react';
import axios from 'axios';
import {View,Text,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import CartListItem from '../components/CartListItem';
export default class CartsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            Carts:[],
            cout:0,
        }
    }
   _cong = () =>{
       this.setState({
           cout:this.state.cout+1
       })
   }
   _tru = () =>{
    this.setState({
        cout:this.state.cout-1,
        
    })
}
    static navigationOptions = {
        title:'Giỏ hàng'
    };

    componentDidMount(){
        axios.get('/products')
        .then(res=>{
          this.setState({
            Carts:res.data
          })
        })
        .catch(error =>{
          console.error(error)
        })
      }
    render(){
        const {navigation} = this.props;
        const {Carts} =this.state;
        const {cout} = this.state;
        const id = navigation.getParam('categoryId');
        const name = navigation.getParam('categoryName');
        const price = navigation.getParam('categoryPrice');
        
        return(
            <View style={styles.container}>
                <FlatList
                style={styles.flatlist}
                data={Carts}
                renderItem={({item}) =><CartListItem   cout={cout} cart={item}
                />}
                // _tru={this._tru.bind(this)} _cong={this._cong.bind(this)}
                
                keyExtractor={(item)=>`${item.id}`}
                />

                <View style={styles.total}>
                <Text style={styles.text}>3.000.000 VND</Text>
                <TouchableOpacity style={styles.dh}><Text style={styles.text}>Đặt Hàng</Text></TouchableOpacity>
                </View>
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