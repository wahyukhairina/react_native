import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './src/components/redux/store';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/components/screen/login/Login';
import ProductList from './src/components/screen/product/ProductList';
import Cart from './src/components/screen/product/Cart';
import HomeScreen from './src/components/screen/home/Home';
import AddProduct from './src/components/screen/product/AddProduct';
import UpdateProduct from './src/components/screen/product/UpdateProduct';
import Profile from './src/components/screen/profile/Profile';

const homeNavigator = createStackNavigator({
  Home: LoginScreen,
  Product: ProductList,
  Cart: Cart,
  HomeScreen: HomeScreen,
  AddProduct: AddProduct,
  UpdateProduct: UpdateProduct,
  Profile: Profile,
});
const AppNavigator = createSwitchNavigator({
  Home: homeNavigator,
});

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
