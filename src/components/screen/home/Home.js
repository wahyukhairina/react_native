import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
} from 'react-native';

import {Footer, FooterTab} from 'native-base';

import bg from '../../../../images/bg-putih.png';
import logo from '../../../../images/logofi1x.png';
import HomeScreen from '../home/Home';
import ProductScreen from '../product/ProductList';

export default class Home extends Component {
  componentDidMount() {
    console.log('INI DID MOUNT');
    console.log(AsyncStorage.getItem('isAuth'));
    if (!AsyncStorage.getItem('isAuth')) {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.backgroundContainer}>
        <View>
          <View style={styles.mainContainer}>
            <Text style={styles.textWelcome}>Hi, Welcome to</Text>
            <Image source={logo} style={styles.logo} />
          </View>
        </View>
        <Footer>
          <FooterTab>
            <Button
              style={styles.button}
              title="   Home   "
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text>Home</Text>
            </Button>
            <Button
              title="Product"
              onPress={() => this.props.navigation.navigate('Product')}>
              <Text>Product</Text>
            </Button>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Profile')}
              title="Profile">
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 100,
  },
  textWelcome: {
    fontSize: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#F0B3CE',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainContainer: {
    flex: 6,
    justifyContent: 'center',
  },
});
