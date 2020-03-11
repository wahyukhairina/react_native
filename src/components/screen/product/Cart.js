import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet, 
    Image
} from 'react-native'

import bg from '../../../../images/bg-putih.png'
import logo from '../../../../images/logofi1x.png'

export default class Cart extends Component {
    render () {
        return (
            <ImageBackground source={bg} style={styles.backgroundContainer} >
            <View>
                <ImageBackground source={logo} style={styles.logo} >
                <Text>
                    Ini halaman ProducList
                </Text>
                </ImageBackground>
            </View>
            </ImageBackground>
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