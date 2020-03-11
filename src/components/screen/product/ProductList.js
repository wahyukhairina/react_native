import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct, deleteProduct, searchProduct } from '../../redux/actions/product'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet, 
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native'
import {
    Button,
    Header,
    Item,
    Icon,
    Input
} from 'native-base'

import bg from '../../../../images/bg-putih.png'
import logo from '../../../../images/logofi1x.png'

 class ProducList extends Component {

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: () => (
                <TouchableOpacity 
                        style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20}}
                        onPress={() => navigation.navigate('AddProduct')}
                        >
                            <Text style={{ color: "#fff" }}>Add Product</Text>
                </TouchableOpacity>
            ),
        }
    }

componentDidMount(){
    this.getProduct()
}

searchProduct = (name) => {

    console.log(name)
    this.setState({
        searchName: name
    })
this.props.dispatch(searchProduct(name))

}

async getProduct(){
    await this.props.dispatch(getProduct())
}

async onDelete (id){
    await this.props.dispatch(deleteProduct(id))
}

// onRefreshing = () => {
//     this.getProduct();
// }

renderRow = ({item}) => {
    return(
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
            <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Stock {item.stock}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={()=> this.props.navigation.navigate('UpdateProduct', {
                        products : item
                    })} >
                        <Text style={{ fontSize: 17, color: "orange" }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 17, color: "red" }} onPress={()=>{this.onDelete(item.id)}}>Delete</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

    render () {
        const { products } = this.props
        console.log(products)
        return (
            // <ImageBackground source={bg} style={styles.backgroundContainer} >
            <>
                
                <View style={{ backgroundImage:'white'}}>
                <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.searchProduct} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
                    <FlatList 
                        data={products}
                        renderItem={this.renderRow}
                        // refreshing={products.isLoading}
                        // onRefresh={this.onRefreshing}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View>
             
           </View>
            {/* </ImageBackground> */}
            </>
        )
    }
}


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: { 
        width: 300,
        height: 100
    }
})

const mapStateToProps = ( state ) => {
    return{
        products: state.products.products
    }
}
export default connect(mapStateToProps)(ProducList)