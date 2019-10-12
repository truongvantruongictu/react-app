import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import axios from 'axios';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flexDirection:'row',alignItems:'space-around',width:165}}>
        <Text style={{flex:1,color:'#fff',alignItems:'center',fontWeight:'bold',fontSize:20}}>Cơm sinh viên</Text>
        <Image
        source={require('../images/rice.png')}
        style={{ width: 30, height: 30}}
      />
      </View>
      
    );
  }
}


export default class Categories extends Component{
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
  constructor(props){
    super(props);
    this.state = {
        categories : []
    };
}
componentDidMount(){
  axios.get('/categories')
  .then(res=>{
    this.setState({
      categories:res.data
    })
  })
  .catch(error =>{
    console.error(error)
  })
}
  render(){
    const {navigation} = this.props;
    const {categories} = this.state;
    return(
     
          <FlatList data={categories}
          renderItem={({item}) =>(<CategoryListItem category={item}
          onPress={()=>navigation.navigate('Category',{
            categoryName: item.name,
            categoryId:item.id,
          })}
          
          />)}
          keyExtractor={item => `${item.id}` }
          contentContainerStyle={{  paddingTop:16,paddingLeft:16,paddingRight:16}}
          />
       
      
    )
  }
}