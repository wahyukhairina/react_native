import React, {Component, Profiler} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/components/redux/store';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/components/screen/login/Login';
import ProductItem from './src/components/screen/product/ProductItem';
import Cart from './src/components/screen/product/Cart';
import HomeScreen from './src/components/screen/home/Home';
import AddProduct from './src/components/screen/product/AddProduct';
import UpdateProduct from './src/components/screen/product/UpdateProduct';
import Profile from './src/components/screen/profile/Profile';
import CartItem from './src/components/screen/cart/cart';
import History from './src/components/screen/history/history';
import Setting from './src/components/screen/settings/setting';
import User from './src/components/screen/user/user';
import Category from './src/components/screen/category/category';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthLoadingScreen from './src/components/screen/login/AuthLoadingScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs';

const homeNavigator = createStackNavigator({
  Home: HomeScreen,
  Product: ProductItem,
  Cart: Cart,
  AddProduct: AddProduct,
  UpdateProduct: UpdateProduct,
  Profile: Profile,
  CartItem: CartItem,
  Setting: Setting,
  Category: Category,
  User: User,
});

const AuthStack = createStackNavigator({ 
  Login: LoginScreen });




const TabNavigator = createBottomTabNavigator(
  {
    Home: homeNavigator,
    CartItem: CartItem,
    History: History,
    Setting: Setting,
    Profile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'barcode';
        } else if (routeName === 'CartItem') {
          iconName = 'shoppingcart';
        } else if (routeName === 'History') {
          iconName = 'linechart';
        } else if (routeName === 'Setting') {
          iconName = 'setting';
        } else {
          iconName = 'user';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: TabNavigator,
  Auth: AuthStack,
});

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
