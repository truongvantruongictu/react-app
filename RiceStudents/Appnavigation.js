import React,{Component} from'react';
import{Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Category from './screens/Category';
import Categories from './screens/Categories';
import Carts from './screens/Carts';
import Orders from './screens/Orders';
import Infos from './screens/Infos';
import Chitietbvcn from './screens/Chitietbvcn';
const CategoryStack = createStackNavigator({
  Categories,
  Category
});
CategoryStack.navigationOptions ={
 tabBarLabel:'Trang chủ',
 tabBarIcon: ({ focused }) => (
  focused ? <Image
      source={require('./images/home_active.png')}
      style={{width:25, height: 25}}
    />
    :
    <Image
      source={require('./images/home.png')}
      style={{width:25, height: 25}}
    />
),
 

};
const CartStack = createStackNavigator({
   Carts,
   
});
CartStack.navigationOptions={
  tabBarLabel:'Giỏ hàng',
  tabBarIcon: ({ focused}) => (
    focused ? <Image
        source={require('./images/cart_active.png')}
        style={{width:25, height: 25}}
      />
      :
      <Image
        source={require('./images/cart.png')}
        style={{width:25, height: 25}}
      />
  ),
}
const OrderStack = createStackNavigator({
  Orders,
  Chitietbvcn,
});
OrderStack.navigationOptions={
  tabBarLabel:'Cẩm nang',
  tabBarIcon: ({ focused }) => (
    focused ? <Image
        source={require('./images/order_active.png')}
        style={{width:25, height: 25}}
      />
      :
      <Image
        source={require('./images/order.png')}
        style={{width:25, height: 25}}
      />
  ),
}
const InfoStack = createStackNavigator({
  Infos
});
InfoStack.navigationOptions={
  tabBarLabel:'Thông tin',
  tabBarIcon: ({ focused}) => (
    focused ? <Image
        source={require('./images/chef_active.png')}
        style={{width:25, height: 25}}
      />
      :
      <Image
        source={require('./images/chef.png')}
        style={{width:25, height: 25}}
      />
  ),
}
const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  InfoStack,
});
export default AppNavigator;