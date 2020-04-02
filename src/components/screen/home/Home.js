/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addCart } from '../../redux/actions/cart'
import {
  getProduct,
  deleteProduct,
  searchProduct,
  sortProduct,
} from '../../redux/actions/product';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Button, Header, Item, Input, Footer, FooterTab} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    product : []
  }

  async componentDidMount() {
   await this.getProduct();
  }

  searchProduct = name => {
    this.props.dispatch(searchProduct(name));
  };


  async getProduct() {
    await this.props.dispatch(getProduct());
    this.setState = ({
      product : this.props.products
    })
  }
  
  async onClickSort(e) {
    await this.props.dispatch(sortProduct(e));
  }

async onAddCart (item){
    const cart = this.props.cart
    let i
    cart.map(cart => {
      if (cart.id === item.id) {
        i = 0
        return alert('Product have been added')
      }
      return products
    })

    if (i !== 0) {
      const InitialTotal = this.props.total
      const product = item
      item.qty = 1
      item.total = InitialTotal + product.price
      await this.props.dispatch(addCart(item))
    }
  }

  convertToRupiah(angka) {
    var rupiah = '';
    var angkarev = angka
      .toString()
      .split('')
      .reverse()
      .join('');
    for (var i = 0; i < angkarev.length; i++) {
      if (i % 3 == 0) {
        rupiah += angkarev.substr(i, 3) + '.';
      }
    }
    return (
      'Rp. ' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('') +
      ',-'
    );
  }
  onRefreshing = () => {
      this.getProduct();
  }

  renderRow = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,.1)',
          height: 110,
        }}>
        <Image
          source={{uri: item.image}}
          style={{width: 100, height: 100, marginLeft: 10}}
        />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginBottom: 5,
              fontFamily: 'monospace',
            }} ellipsizeMode='tail' numberOfLines={1}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'monospace',
              marginLeft: 10,
              marginBottom: 18,
            }}>
            Stock {item.stock}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15, marginLeft: 10, marginBottom: 18}}>
              {this.convertToRupiah(item.price)}
            </Text>
            <TouchableOpacity onPress={()=> this.onAddCart (item)} style={{marginLeft: '50%'}}>
              <Icon name="cart" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    console.disableYellowBox = true;
    const {products} = this.props.products;
    console.log(this.props.products)
    return (
      <>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View>
            <Header style={{backgroundColor: '#FFAEAE'}} searchBar rounded>
              <Item style={{borderRadius: 50}}>
                <Input placeholder="Search" onChangeText={this.searchProduct} />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFAEAE',
                borderRadius: 25,
                width: 100,
                height: 30,
              }}
              onPress={() => this.onClickSort('ASC')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: 'sans-serif-condensed',
                  color: 'white',
                }}>
                Highest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFAEAE',
                borderRadius: 25,
                width: 100,
                height: 30,
                marginLeft: 10,
              }}
              onPress={() => this.onClickSort('DESC')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: 'sans-serif-condensed',
                  color: 'white',
                }}>
                Lowest
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.FlatList}>
            <FlatList
              data={products}
              renderItem={this.renderRow}
              showsVerticalScrollIndicator={false}
              refreshing={this.props.products.isLoading}
              onRefresh={this.onRefreshing}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // tabBgColor: '#FFAEAE'
  },
  FlatList: {
    flex: 11,
  },
  sort: {
    flex: 1,
  },
  footer: {
    color: '#FFAEAE',
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginTop: 8,
  },
});

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart.cart,
    total: state.cart.total
  };
};
export default connect(mapStateToProps)(HomeScreen);
