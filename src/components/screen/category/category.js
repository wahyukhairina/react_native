import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation'
import {getCategory} from '../../redux/actions/category'
import {connect} from 'react-redux';

class Category extends Component {
    
    componentDidMount () {
        this.getCategory()
    }
    async getCategory() {
        await this.props.dispatch(getCategory());
      }

      renderRow = ({item}) => {
          return (
              <>
              <View>
                  <Text>{item.name}</Text>
              </View>
              <View>
                  <Text>{item.data_added}</Text>
              </View>
              </>
          )

    }
    render () {
        console.disableYellowBox = true;
        const {category} = this.props;
        return (
            <>
            <Text> ini CATEGORY</Text>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View>
            <FlatList
              data={category}
              renderItem={this.renderRow}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </>
        )
        
    }
}
const mapStateToProps = state => {
  return {
    category: state.category.category,
  };
};
export default withNavigation(connect(mapStateToProps)(Category));