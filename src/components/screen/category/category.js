import React, { Component } from 'react'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'

class Category extends Component {
    render () {
        return (
            <>
            <Text> ini CATEGORY</Text>
            </>
        )
    }
}

export default withNavigation(Category)