import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export class HomePage extends React.Component {

    static navigationOptions = {
        header: null
    }


    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome To Home Page',
            display: true
        };
    }

  
    render() {
        const { container, buttonFlatlist, textbuttonFlatlist } = styles;
        const { navigate } = this.props.navigation;
        return (
            <View style={container}>
              
                <TouchableOpacity style={buttonFlatlist}
                    onPress={() => navigate('ProgressBar')}
                >
                    <Text style={textbuttonFlatlist}>Progress Bar</Text>
                </TouchableOpacity>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonFlatlist: {
        height: 50,
        width: 50,
        backgroundColor: 'brown',
        justifyContent: 'center'
    },
    textbuttonFlatlist: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    }
});

export default HomePage;