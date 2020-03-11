import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

import { updateProduct } from '../../redux/actions/product';

class AddProduct extends Component{
    static navigationOptions = {
        title: "Update Product",
        headerStyle: {
            backgroundColor: 'rgb(245, 149, 84)',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };
    state = {
        name: "",
        desc: "",
        price: "",
        category: "",
        stock: ""
    };

    componentDidMount(){
        const products = this.props.navigation.getParam('products')

        this.setState({
            name: products.name,
            desc: products.desc,
            price: products.price,
            category: products.category,
            stock: products.stock
        })
    }

    onSubmit = async() => {
        const product = this.props.navigation.getParam('products')
        console.log('STATE', this.state)
        console.log('ID', product.id)
        await this.props.dispatch(updateProduct(this.state, product.id));
        if(!this.props.products.products.isLoading){
            this.props.navigation.navigate('Product');
        }
        
    }

    render(){
        return(
            <Container>
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="product name" onChangeText={(text) => this.setState({ name: text })} value={`${this.state.name}`} />
                        </Item>
                        <Item>
                            <Input placeholder="description" onChangeText={(text) => this.setState({ desc: text })} value={`${this.state.desc}`} />
                        </Item>
                        {/* <Item>
                            <Input placeholder="Upload Image" onChangeText={(text) => this.setState({ photo: text })} />
                        </Item> */}
                        <Item>
                            <Input placeholder="Enter Price" onChangeText={(text) => this.setState({ price: text })} value={`${this.state.price}`} />
                        </Item>
                        <Item>
                            <Input placeholder="Enter Category" onChangeText={(text) => this.setState({ category: text })} value={`${this.state.category}`}/>
                        </Item>
                        <Item>
                            <Input placeholder="Enter Stock" onChangeText={(text) => this.setState({ stock: text })} value={`${this.state.stock}`}/>
                        </Item>
                    </Form>
                    <Button primary style={{ margin: 10 }} onPress={this.onSubmit}>
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(AddProduct);