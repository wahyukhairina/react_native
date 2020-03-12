/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {Footer, FooterTab} from 'native-base';
import home from '../../../../images/home.png';
import management from '../../../../images/management.png';
import profile from '../../../../images/profile.png';
import avatar from '../../../../images/avatar.png';
import cart from '../../../../images/cart.png'

class Profile extends Component {
  static navigationOptions = {
    header: null,
  };
  onLogout() {
    AsyncStorage.removeItem('user-id');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('isAuth');
    this.props.navigation.navigate('Home');
  }

  render() {
    console.log(this.props);
    return (
      <View style={{flex: 1, flexDirection: 'column-reverse'}}>
        <View>
        <Footer>
                <FooterTab style={{backgroundColor: '#F2F2F2'}}>
                  <TouchableOpacity
                    style={{marginLeft: 30}}
                    onPress={() =>
                      this.props.navigation.navigate('HomeScreen')
                    }>
                    <Image style={styles.icon} source={home} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Product')}>
                    <Image style={styles.icon} source={management} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Cart')}>
                    <Image style={styles.icon} source={cart} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginRight: 30}}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image style={styles.icon} source={profile} />
                  </TouchableOpacity>
                </FooterTab>
              </Footer>
        </View>

        <View>
          <View styles={{marginTop: 10}}>
            <Text style={{marginLeft: 30, marginTop: 10, fontSize: 16}}>
              {' '}
              Name{' '}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Wahyu Khairina'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
            />

            <Text style={{marginLeft: 30, marginTop: 10, fontSize: 16}}>
              Status
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Admin'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid="transparent"
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFAEAE',
              width: 310,
              height: 40,
              marginLeft: 26,
              marginTop: 20,
              borderRadius: 25,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'white',
                fontFamily: 'monospace',
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFAEAE',
              width: 310,
              height: 40,
              marginLeft: 26,
              marginTop: 20,
              borderRadius: 25,
              marginBottom: 10,
            }}
            onPress={this.onLogout.bind(this)}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'white',
                fontFamily: 'monospace',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Image
            style={{justifyContent: 'center', marginLeft: 70}}
            source={avatar}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginTop: 8,
  },
  input: {
    width: -5,
    height: 40,
    borderRadius: 25,
    fontSize: 19,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    marginTop: 10,
  },
});

export default Profile;
