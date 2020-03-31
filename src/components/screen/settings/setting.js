import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import {Text} from 'react-native';
import User from '../user/user';
import Category from '../category/category';
import ProductItem from '../product/ProductItem';

class Setting extends Component {
  render() {
    return (
      <>
        <Container>
          
          <Tabs>
            <Tab heading="Product">
              <ProductItem />
            </Tab>
            <Tab heading="Category">
              <Category />
            </Tab>
            <Tab heading="User">
              <User />
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}

export default Setting;
