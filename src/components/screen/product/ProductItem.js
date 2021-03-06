/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
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
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
 import { withNavigation } from 'react-navigation'

class ProductItem extends Component {
  
  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    await this.props.dispatch(getProduct());
  }

  async onDelete(id) {
    Alert.alert(
      'Delete Confirmation',
      //body
      'Are you sure want to delete this product ? ',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => this.props.dispatch(deleteProduct(id))},
      ],
      {cancelable: false},
    );
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
  // onRefreshing = () => {
  //     this.getProduct();
  // }

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
            }} ellipsizeMode='tail' numberOfLines={1}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              marginBottom: 5,
              fontFamily: 'monospace',
            }}>
            Stock {item.stock}
          </Text>
          <Text style={{fontSize: 15, marginLeft: 10, marginBottom: 5}}>
            {this.convertToRupiah(item.price)}
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 170}}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() =>
                this.props.navigation.navigate('UpdateProduct', {
                  products: item,
                })
              }>
              <Icon name='pencil' size={20} color='grey'/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.onDelete(item.id);
              }}
              style={{marginLeft: 10}}>
              <Icon name='trash' size={20} color='grey'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    console.disableYellowBox = true;
    const {products} = this.props;
    console.log(products);
    return (
      <>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.FlatList}>
            <FlatList
              data={products}
              renderItem={this.renderRow}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
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
    products: state.products.products,
  };
};
export default withNavigation(connect(mapStateToProps)(ProductItem));
