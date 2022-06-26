import React, { Component } from "react";
import { Button, Text, View, ImageBackground, StyleSheet } from 'react-native';

const image = { uri: "https://thumbs.dreamstime.com/b/tourist-bus-10254354.jpg" };

class User extends Component{

    payment(){
        console.log("move to payment page");
        this.props.navigation.navigate('Payment');
    }
    request(){
        console.log("move to requesting page");
        this.props.navigation.navigate('Request');
       

    }
    history(){
        console.log("move to History page");
        this.props.navigation.navigate('history');
    }
    render(){
        return(
            <View>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text>User Home  page</Text>
                <View>
                    <View style={styles.btn1}><Button onPress={()=>this.history()} title="History"/></View>
                </View>
                <View style={styles.btn2}>
                    <View><Button onPress={()=>this.payment()} title="Payment"/></View>
                </View>
                <View style={styles.btn3}>
                    <View><Button onPress={()=>this.request()} title="Request the vehicle"/></View>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        //flex: 1,
        justifyContent: "center",
        height: 450
      },
      btn1 : {
        width: 100
      },
      btn2 : {
        width: 100
      },
      btn3 : {
        width: 200,
        
      }
});

export default User;