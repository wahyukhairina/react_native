import React, {Component} from 'react';

import {View, Text, AsyncStorage, TouchableOpacity} from 'react-native';

class Profile extends Component {
  onLogout() {
    AsyncStorage.removeItem('user-id');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('isAuth');
    this.props.navigation.navigate('Login');
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity onPress={this.onLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
