import React, {Component} from 'react';
import {connect} from 'react-redux';
import { postOrder } from '../../redux/actions/checkout'
import {removeItem, addQty, reduceQty, removeCart} from '../../redux/actions/cart';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

class CartItem extends Component {
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

  removeItem = cart => {
    const initialTotal = this.props.total;
    const total = initialTotal - cart.qty * cart.price;
    cart.total = total;
    this.props.dispatch(removeItem(cart));
  };

  addQuantity = async cart => {
    console.log('function', cart.price);
    const initialTotal = this.props.total;
    if (cart.stock >= cart.qty) {
      const total = initialTotal + cart.price;
      cart.total = total;
      await this.props.dispatch(addQty(cart));
    } else alert('Stock unsufficient!');
  };

  reduceQuantity = async cart => {
    const initialTotal = this.props.total;
    if (cart.qty > 1) {
      const total = initialTotal - cart.price;
      cart.total = total;
      await this.props.dispatch(reduceQty(cart));
    }
  };

  async onCheckout(cart) {
    const data = {
      product: this.props.cart,
      total: this.props.total
    };

    await this.props.dispatch(postOrder(data));
    await this.props.dispatch(removeCart(cart))
    alert('transaction success')
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
          source={{uri: item.image, marginLeft: 10}}
          style={{width: 100, height: 100, marginLeft: 10}}
        />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginBottom: 5,
              fontFamily: 'monospace',
            }}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {item.name}
          </Text>

          <View>
            <Text style={{fontSize: 15, marginLeft: '5%', marginBottom: 5}}>
             @ {this.convertToRupiah(item.price)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '5%',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => this.reduceQuantity(item)}
              style={{
                backgroundColor: '#FFAEAE',
                width: '10%',
                height: '100%',
                alignItems: 'center',
                borderRadius: 5
              }}>
              <Text>-</Text>
            </TouchableOpacity>
            <View
              style={{width: '8%', alignItems: 'center', marginHorizontal: 10}}>
              <Text style={{fontSize: 16}}>{item.qty}</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.addQuantity(item)}
              style={{
                backgroundColor: '#FFAEAE',
                width: '10%',
                height: '100%',
                alignItems: 'center',
                borderRadius: 5
              }}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.removeItem(item)}
              style={{
                backgroundColor: '#FFAEAE',
                width: '40%',
                height: '110%',
                alignItems: 'center',
                marginHorizontal: '20%',
                borderRadius: 5
              }}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    console.disableYellowBox = true;
    const {products} = this.props;
    const {cart} = this.props;
    console.log('keranjang', cart);
    return (
     <>
     {cart.length !== 0 ?
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.FlatList}>
            <FlatList
              data={cart}
              renderItem={this.renderRow}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{flexDirection:'row', height:'6%', alignItems:'center',  backgroundColor:'#C0C0C0'}}>
            <Text style={{marginLeft: '5%', fontSize: 16}}>Total : {this.convertToRupiah(this.props.total)}</Text>
            <TouchableOpacity onPress={()=> this.onCheckout(cart)} style={{marginLeft:'30%', width:'25%',borderRadius: 5, height:'70%', alignItems:'center', backgroundColor:'#FFAEAE'}}><Text style={{fontSize: 16}}>Checkout</Text></TouchableOpacity>
          </View>
        </View>
        :
      <View style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
<Text>Your Cart is Empty</Text>
      </View>
        }
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
    cart: state.cart.cart,
    total: state.cart.total,
    products: state.products.products,
  };
};
export default connect(mapStateToProps)(CartItem);
