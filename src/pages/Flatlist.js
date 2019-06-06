import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Alert } from 'react-native';

const numColumn = 3;

export class FlatlistPage extends React.Component {

    static navigationOptions = {
        headerColor: 'blue'
    }

    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome To Home Page',
            dummy: [{ key: 'SATU' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }],
        };
    }

    GetAlert(dummy) {
        Alert.alert(dummy)
    }

    renderDummy = (item) => {
        console.log(item)
        const { buttonFlatlist, textbuttonFlatlist } = styles;

        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={buttonFlatlist}
                    onPress={() => this.GetAlert()}
                >
                    <Text style={textbuttonFlatlist}>{item.dummy}</Text>
                </TouchableOpacity>
            </View>

        )
    }

    render() {
        const { dummy } = this.state
        const { container } = styles;
        return (
            <View style={container}>
                <FlatList
                    data={dummy}
                    renderItem={this.renderDummy}
                    keyExtractor={this.keyExtractor}
                    numColumns={numColumn}
                />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
    },
    buttonFlatlist: {
        flex: 1,
        height: Dimensions.get('window').width / numColumn,
        margin: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    textbuttonFlatlist: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    }

});

export default FlatlistPage;