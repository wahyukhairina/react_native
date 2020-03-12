import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Button,
  Header,
  Item,
  Icon,
  Input,
  Footer,
  FooterTab,
} from 'native-base';
import home from '../../../../images/home.png';
import management from '../../../../images/management.png';
import profile from '../../../../images/profile.png';
import cart from '../../../../images/cart.png';
import empty from '../../../../images/empty.jpg';

class CartItem extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column-reverse'}}>
        <View>
          <Footer>
            <FooterTab style={{backgroundColor: '#F2F2F2'}}>
              <TouchableOpacity
                style={{marginLeft: 30}}
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Image style={styles.icon} source={home} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Product')}>
                <Image style={styles.icon} source={management} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CartItem')}>
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

        <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 20,
            marginBottom: 50,
            marginLeft: 50,
          }}>
          Your cart is empty...
        </Text>

        <View>
          <Image
            source={empty}
            style={{width: 300, height: 300, marginBottom: 60, marginLeft: 30}}
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
});

export default CartItem;
