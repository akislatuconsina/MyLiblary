import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export class HomePage extends React.Component {

    static navigationOptions = {
        header: null
    }


    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome To Home Page'
        };
    }


    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Text>TEST PAGE CUY</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomePage;