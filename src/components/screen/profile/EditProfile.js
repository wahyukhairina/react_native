import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container, Content, Form, Item, Input, Button, Text} from 'native-base';

class EditProfile extends Component {
  static navigationOptions = {
    title: 'Update Product',
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
    name: '',
    desc: '',
    price: '',
    category: '',
    stock: '',
  };

  onSubmit = async () => {
    // const product = this.props.navigation.getParam('products');
    // await this.props.dispatch(updateProduct(this.state, product.id));
    // if (!this.props.products.products.isLoading) {
    //   this.props.navigation.navigate('Product');
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Form style={{marginRight: 10}}>
            <Item>
              <Input
                placeholder="product name"
                onChangeText={text => this.setState({name: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="description"
                onChangeText={text => this.setState({desc: text})}
              />
            </Item>
            {/* <Item>
                            <Input placeholder="Upload Image" onChangeText={(text) => this.setState({ photo: text })} />
                        </Item> */}
            <Item>
              <Input
                placeholder="Enter Price"
                onChangeText={text => this.setState({price: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Enter Category"
                onChangeText={text => this.setState({category: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Enter Stock"
                onChangeText={text => this.setState({stock: text})}
              />
            </Item>
          </Form>
          <Button primary style={{margin: 10}} onPress={this.onSubmit}>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default EditProfile;
