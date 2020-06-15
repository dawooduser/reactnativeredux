import React, {Component} from "react";
import {View, StyleSheet, Text, ImageBackground, Image, Animated, Easing, Dimensions, TextInput, TouchableWithoutFeedback} from "react-native";

export default class Welcome extends Component {
    constructor(){ 
        super()
        this.state = {
            screenwidth: Dimensions.get('screen').width,
            screenheight: Dimensions.get('screen').height,
        }
    }
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.viewport}>
                    <ImageBackground style = {styles.background} source = {require('../../assets/DSCF8865.jpg')} />
                    <View style = {styles.filter} />
                    <View style = {styles.logocontainer}>
                        {/* <Image style = {styles.logo} source= {require('./resources/logo.jpg')} /> */}
                    </View>
                    <View style = {styles.loginfilter} />
                    <View style = {styles.headercontainer}>
                        <Text style = {styles.header}>Welcome To</Text>
                        <Text style = {styles.header}>BEUTK</Text>
                    </View>
                    <TouchableWithoutFeedback onPress = {()=> {
                        this.props.navigation.navigate('SignIn');
                    }}>
                        <View style = {[styles.button, styles.buttonone]}>
                            <Text style = {styles.buttontext}>Sign In</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style = {[styles.button, styles.buttontwo]}>
                        <Text style = {[styles.buttontext, {color: '#323232'}]}>Sign up</Text>
                    </View>
                    <View style = {styles.forgotpasswordcontainer}>
                        <Text style = {styles.forgotpassword}>Forgot your password?</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: '0%',
        top: '0%',
        backgroundColor: 'white',
    },
    viewport: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: '0%',
        top: '0%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: '0%',
        top: '0%',
    },
    filter: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: '0%',
        top: '0%',
        backgroundColor: '#646464',
        opacity: 0.7,
    },
    logocontainer: {
        height: (Dimensions.get('screen').height/100) * 20,
        width: (Dimensions.get('screen').height/100) * 20,
        position: 'absolute',
        left: '10%',
        top: '5%',
    },
    logo: {
        height: '80%',
        width: '80%',
    },
    loginfilter: {
        height: '50%',
        width: '100%',
        position: 'absolute',
        left: '0%',
        bottom: '0%',
        borderTopRightRadius: 275,
        backgroundColor: '#323232',
        opacity: 0.5
    },
    headercontainer: {
        height: '20%',
        position: 'absolute',
        left: '10%',
        top: '25%',
        flexDirection: 'column'
    },
    header: {
        color: 'white',
        fontFamily: 'GothamRounded-Medium',
        fontSize: 28,
    },
    button: {
        height: '9%',
        width: '70%',
        position: 'absolute',
        left: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonone: {
        top: '50%',
        borderRadius: 500,
        borderColor: 'white',
        borderWidth: 1,
    },
    buttontwo: {
        top: '60%',
        borderRadius: 500,
        backgroundColor: 'white',
    },
    buttontext: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'GothamRounded-Regular'
    },
    forgotpasswordcontainer: {
        height: '5%',
        width: '100%',
        position: 'absolute',
        left: '0%',
        // bottom: '1.5%',
        top: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotpassword: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'GothamRounded-Regular',
    }
})