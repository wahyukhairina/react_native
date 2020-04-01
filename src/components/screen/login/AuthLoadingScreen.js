import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    if(this.props.auth.isAuthenticated) {
        this.props.navigation.navigate('Home')
      }
     else {
        this.props.navigation.navigate('Login')
     }
  };

  // Render any loading content that you like here
  render() {
      console.log(this.props)
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
  } 
export default connect(mapStateToProps)( AuthLoadingScreen) 