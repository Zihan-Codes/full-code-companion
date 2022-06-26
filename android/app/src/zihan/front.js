import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class First extends Component{
    driver(){
        console.log("joined as Driver");
        this.props.navigation.navigate('OrderList');
    }

    customer(){
        console.log("joined as customer");
        this.props.navigation.navigate('User');
    }

    render()
    {
        return(
            <ScrollView>
                <View style={styles.head}>
                    <Text style={styles.headtxt}>Welcome to</Text>
                    <Text style={styles.headtxt}>Companion</Text>
                </View>
                <View style={styles.bdy}>
                    <View style={styles.driver}>
                        <Text style={styles.text}>Join as a Driver</Text>
                        <TouchableOpacity onPress={()=>this.driver()} style={styles.btn}><Text style={styles.btntxt}>Join</Text></TouchableOpacity>
                    </View>
                    <View style={styles.driver}>
                        <Text style={styles.text}>Join as a</Text>
                        <Text style={styles.text}>Customer</Text>
                        <TouchableOpacity onPress={()=>this.customer()} style={styles.btn}><Text style={styles.btntxt}>Join</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        head: {
            backgroundColor: '#00fa9a',
            height: 200,
            alignContent: "center",
            textAlign: "center"
        },
        bdy: {
            backgroundColor: 'blue',
            height: 450
        },
        btn: {
            width: 100,
            height: 30,
            backgroundColor: 'red',
            marginBottom: 20,
            marginTop: 20,
            alignItems: "center",
        },
        btntxt: {
            color: 'white',
            alignItems: "center",
            fontSize: 20,
        },
        text: {
            color: 'white',
            fontSize: 40
        },
        driver: {
            alignItems: "center",
            marginTop: 40,
            backgroundColor: '#a347a3',
            width: 300,
            marginLeft: 10,
        },
        headtxt: {
            color: 'red',
            fontSize: 50,
        }
    }
);

export default First;