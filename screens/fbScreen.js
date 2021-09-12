import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class fbScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', alignContent: 'center'}}>
                <Image
                style={{ width: 100, height: 100,}}
                source={require('../images/fb.png')}
              />
                <Text style={{justifyContent: 'center', alignSelf: 'center', alignContent: 'center'}}> Facebook </Text>
            </View>
        )
    }
}
