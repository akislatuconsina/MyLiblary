import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ProgressBarAndroid, Image, TouchableWithoutFeedback } from 'react-native';

export class ProgressBarPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            progressbar: 0.00,
            nexprogressbar: 0.00,
            finalprogressbar: 0.00
        };
    }

    componentDidMount() {
        this.value = setInterval(() => {
            if (this.state.progressbar < 1) {
                this.setState((progress) => ({ progressbar: progress.progressbar + .01 }))
            }
        }, 30)

        return this.nextProgressBar()
    }

    nextProgressBar() {
        this.value = setInterval(() => {
            if (this.state.progressbar > 1) {
                this.setState((progress) => ({ nexprogressbar: progress.nexprogressbar + .01 }))
            }
        }, 30)

        return this.finalProgressBar()
    }

    finalProgressBar() {
        this.value = setInterval(() => {
            if (this.state.nexprogressbar > 1) {
                this.setState((progress) => ({ finalprogressbar: progress.finalprogressbar + .01 }))
            }
        }, 30)

        // return clearInterval(this.value)
    }


    render() {
        const { progressbar, nexprogressbar, finalprogressbar } = this.state
        const { container, containerprogressbar, containerphoto } = styles;
        return (
            <View style={container}>

                <View style={containerprogressbar}>

                    <View style={{ flex: 1, margin: 2, borderRadius: 70 }}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={progressbar}
                            color={'white'}
                        />
                    </View>

                    <View style={{ flex: 1, margin: 2, borderRadius: 70 }}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={nexprogressbar}
                            color={'white'}
                        />
                    </View>

                    <View style={{ flex: 1, margin: 2, borderRadius: 70 }}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={finalprogressbar}
                            color={'white'}
                        />
                    </View>

                </View>

                <View style={containerphoto}>

                    {
                        progressbar < 1 && nexprogressbar === 0 ?
                            <TouchableWithoutFeedback
                                onPress={() => this.onTouch()}
                            >
                                <Image
                                    style={{ height: '100%', width: '100%', alignSelf: 'center' }}
                                    source={require('./../assets/images/wallpaper-1.jpg')}
                                    resizeMode='cover'
                                />
                            </TouchableWithoutFeedback>
                            :
                            <Image />
                    }

                    {
                        nexprogressbar > 0 && nexprogressbar < 1 ?
                            <TouchableWithoutFeedback
                                onPress={() => this.onTouch()}
                            >
                                <Image
                                    style={{ height: '100%', width: '100%', alignSelf: 'center' }}
                                    source={require('./../assets/images/wallpaper-2.jpg')}
                                    resizeMode='cover'
                                />
                            </TouchableWithoutFeedback>
                            :
                            <Image />
                    }


                    {
                        finalprogressbar > 0 ?
                            <Image
                                style={{ height: '100%', width: '100%', alignSelf: 'center' }}
                                source={require('./../assets/images/wallpaper-3.jpg')}
                                resizeMode='cover'
                            />
                            :
                            <Image />
                    }

                </View>


            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    containerphoto: {
        flex: 1,
        zIndex: 0,
        marginTop: -20
    },
    containerprogressbar: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'red',
        // marginLeft: 10,
        // marginRight: 10,
        zIndex: 1
    },

});

export default ProgressBarPage;