import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class igScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', alignContent: 'center'}}>
                <Image
                style={{ width: 100, height: 100,}}
                source={require('../images/ig.jpeg')}
              />
                <Text style={{justifyContent: 'center', alignSelf: 'center', alignContent: 'center'}}> Instagram </Text>
            </View>
        )
    }
}
