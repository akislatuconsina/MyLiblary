import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';


export class ModalPage extends React.Component {

    static navigationOptions = {
        Title: 'modal'
    }

    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome To Modal Page',
            modalVisible: true
        };
    }

    isModalVisible() {
        this.setState({ modalVisible: !this.state.modalVisible })
    }


    render() {

        const { container, showmodalbutton, textshowmodalbutton } = styles;
        return (
            <View style={container}>
                <TouchableOpacity style={showmodalbutton}
                    onPress={() => this.isModalVisible()}
                >
                    <Text style={textshowmodalbutton}>Show Modal</Text>
                </TouchableOpacity>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={!this.state.modalVisible}
                >
                    <View style={{ width: 200, height: 200, backgroundColor: 'black', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.isModalVisible();
                            }}>
                            <Text style={{ color: 'white' }}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    showmodalbutton: {
        height: 50,
        width: 100,
        backgroundColor: 'blue',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textshowmodalbutton: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    }

});

export default ModalPage;