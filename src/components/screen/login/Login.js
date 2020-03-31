
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import axios from 'axios';
import { REACT_APP_API_URL } from 'react-native-dotenv'
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

 class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    username: '',
    password: '',
  };

    componentDidMount(){
      if(this.props.auth.isAuthenticated) {
        this.props.navigation.navigate('Home')
      }
    }
  

  onSubmit = async (e) =>{
    console.log('ini submit', this.state)
    await this.props.dispatch(login(this.state))
    this.props.navigation.navigate('Home')
  }

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

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
} 
export default connect(mapStateToProps) (Login)

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
    backgroundColor: '#FFAEAE',
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
