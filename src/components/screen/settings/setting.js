import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import User from '../user/user';
import Category from '../category/category';
import ProductItem from '../product/ProductItem';

class Setting extends Component {
  render() {
    return (
      <>
        <Container>
          <Tabs>
            <Tab
              tabStyle={{backgroundColor: '#FFAEAE'}}
              activeTabStyle={{backgroundColor: '#FFAEAE'}} textStyle={{color:'grey'}}
              heading="Product">
              <ProductItem />
            </Tab>
            <Tab
              tabStyle={{backgroundColor: '#FFAEAE'}}
              activeTabStyle={{backgroundColor: '#FFAEAE'}} textStyle={{color:'grey'}}
              heading="Category">
              <Category />
            </Tab>
            <Tab   tabStyle={{backgroundColor: '#FFAEAE'}}
              activeTabStyle={{backgroundColor: '#FFAEAE'}} textStyle={{color:'grey'}} heading="User">
              <User />
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}

export default Setting;
