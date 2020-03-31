import React, {Component, Profiler} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './src/components/redux/store';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/components/screen/login/Login';
import ProductItem from './src/components/screen/product/ProductItem';
import Cart from './src/components/screen/product/Cart';
import HomeScreen from './src/components/screen/home/Home';
import AddProduct from './src/components/screen/product/AddProduct';
import UpdateProduct from './src/components/screen/product/UpdateProduct';
import Profile from './src/components/screen/profile/Profile';
import CartItem from './src/components/screen/cart/cart'
import Setting from './src/components/screen/settings/setting'
import User from './src/components/screen/user/user'
import Category from './src/components/screen/category/category'
import Icon from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from 'react-navigation-tabs';


const homeNavigator = createStackNavigator({
  Home: LoginScreen,
  Product: ProductItem,
  Cart: Cart,
  HomeScreen: HomeScreen,
  AddProduct: AddProduct,
  UpdateProduct: UpdateProduct,
  Profile: Profile,
  CartItem: CartItem,
  Setting : Setting,
  Category: Category,
  User: User
});


const AppNavigator = createSwitchNavigator({
  Home: homeNavigator,
});

const TabNavigator = createBottomTabNavigator({
  Home: AppNavigator,
  CartItem: CartItem,
  Setting : Setting,
  Profile : Profile
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'barcode'
      } else if (routeName === 'CartItem') {
        iconName = 'shoppingcart';
      } else if (routeName === 'Setting') {
        iconName = 'setting';
      } else {
        iconName= 'user'
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);

const AppContainer = createAppContainer(TabNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
