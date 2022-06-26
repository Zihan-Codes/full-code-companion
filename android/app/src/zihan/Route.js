import React, { Component, useState } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

import getDirections from "react-native-google-maps-directions";
import axios from 'axios';


class Route extends Component{

  method(){
    this.props.navigation.navigate('Method');
  }
   

    componentDidMount(){
        this.handleGetDirections();
    }

    
    handleGetDirections = () => {

        
        const data = {
          source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: -33.8600024,
            longitude: 18.697459
          },
          params: [
            {
              key: "dir_action",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ],
          waypoints: [
            {
                latitude: "kandy",
                longitude: "kandy"
              },
              {
                latitude: -33.8600026,
                longitude: 18.697453
              },
                 {
                latitude: -33.8600036,
                longitude: 18.697493
              }
          ]
        }
     
        getDirections(data)
      }


    render()
    {
        return(
            <View>
                <View style={styles.btn}><Button onPress={()=>this.method()} title="Trip Finished"/></View>

            </View>
        );
    }
}

const styles =  StyleSheet.create({
    btn: {
      width: 100
    }
});

export default Route;