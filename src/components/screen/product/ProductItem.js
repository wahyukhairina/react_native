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

import home from '../../../../images/home.png';
import management from '../../../../images/management.png';
import profile from '../../../../images/profile.png';
import edit from '../../../../images/edit.png';
import deletebutton from '../../../../images/delete.png';
import cart from '../../../../images/cart.png';

class ProductItem extends Component {
  static navigationOptions = props => {
    console.log(props);
    return {
      headerTitle: () => null,
      headerRight: () => (
        <TouchableOpacity
          style={{
            backgroundColor: '#FFAEAE',
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            marginRight: 20,
            borderRadius: 25,
          }}
          onPress={() => props.navigation.navigate('AddProduct')}>
          <Text
            style={{
              color: 'white',
              borderRadius: 25,
              backgroundColor: '#FFAEAE',
            }}>
            Add Product
          </Text>
        </TouchableOpacity>
      ),
    };
  };

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
            }}>
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
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={edit}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.onDelete(item.id);
              }}
              style={{marginLeft: 10}}>
              <Image
                style={{width: 25, height: 25, marginLeft: 5}}
                source={deletebutton}
              />
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
      // <ImageBackground source={bg} style={styles.backgroundContainer} >
      <>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.FlatList}>
            <FlatList
              data={products}
              renderItem={this.renderRow}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        {/* </ImageBackground> */}
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
export default connect(mapStateToProps)(ProductItem);
