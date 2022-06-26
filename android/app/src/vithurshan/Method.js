import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

class Method extends Component{
    paynow(){
        this.props.navigation.navigate('Payment');
    }
    paylater(){
        this.props.navigation.navigate('User');
    }
    render(){
        return(
            <View>
                <Text style={styles.txt}>Choose your payment method</Text>
                <View style={styles.btn1}><Button onPress={()=>this.paynow()} title="Paynow"/></View>
                <View style={styles.btn1}><Button onPress={()=>this.paylater()} title="Pay Later"/></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize: 40

    },
    btn1: {
        width: 100
    },
    btn2: {
        width: 100
    }
});

export default Method;