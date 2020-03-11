import React, {Component} from 'react';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

import bgImage from '../../../../images/bg-putih.png';
import logo from '../../../../images/logofi1x.png';
// import { TouchableOpacity } from 'react-native-gesture-handler'
const {width: WIDTH} = Dimensions.get('window');

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    if (AsyncStorage.getItem('token')) {
      this.props.navigation.navigate('HomeScreen');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  onSubmit = () => {
    // console.log('sini');
    axios
      .post('http://192.168.1.22:8006/user/login', this.state)
      .then(res => {
        console.log(res);
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user-id', res.data.user_id);
        AsyncStorage.setItem('isAuth', true);
        this.props.navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.Logo} />
          </View>
          <View styles={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({username: text})}
            />
          </View>

          <View styles={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry={true}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({password: text})}
            />

            <TouchableOpacity style={styles.btnEye} />
          </View>
          <TouchableOpacity style={styles.btnLogin} onPress={this.onSubmit}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </ImageBackground>
      </>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  Logo: {
    width: 300,
    height: 100,
  },
  input: {
    width: WIDTH - 55,
    height: 40,
    borderRadius: 25,
    fontSize: 19,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  inputContainer: {
    marginTop: 20,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#F0B3CE',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    textAlign: 'center',
  },
});
// export default Login
