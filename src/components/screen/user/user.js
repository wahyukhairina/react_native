import React, { Component } from 'react'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'

class User extends Component {
    render () {
        return (
            <>
            <Text> ini USER</Text>
            </>
        )
    }
}

export default withNavigation(User)