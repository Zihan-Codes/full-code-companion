import React, { Component, useState } from "react";
import axios from "axios";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Button, Alert } from "react-native";


class Names11 extends Component{

    getlist(e, id){
         Alert.alert(e + id);
        this.props.navigation.navigate('Order', {p1: this.state.e}
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            data: []
        };
    }

    componentDidMount(){
        this.GetName();
    }

    async GetName(){
        const Apiurl = "http://localhost/ziga/Json%20format/try1/getdata1.php";
      
        let res = await fetch(Apiurl)
          let respjson = await res.json()
          this.setState({data: respjson.brands})
        
        
        /*.then((response)=>{
            alert(response)
        })*/
    }

    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.h2}>All Orders</Text>
                
                
                <FlatList
                
                data={this.state.data}
                renderItem = {({item})=>(
                    <View>
                        <Text style={styles.datac}>
                            
                            <Text style={styles.h1}>{'\n'}Pickup Location: </Text>
                            {item.brand_id}
                            
                            
                        <Text style={styles.h1}>{'\n'}Pickout Location: </Text>
                        {item.brand_title}
                        <Text style={styles.h1}>{'\n'}Contact Number: </Text>
                
                {item.brand_title}
                
                </Text>
                <TouchableOpacity style={styles.btnact} onPress={() => this.getlist(item.slocation, item.id)} >
                    <Text style={styles.btnactxt}>View Details</Text>
                    
                </TouchableOpacity>
                <View style={styles.hrline}/>
                    </View>
                )
                        
                
                    
                
               }
               
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    datac: {
        color: 'black',
        fontSize: 20
    },
    btnact: {
        backgroundColor: 'green',
        width: 100,
        
        
    },
    btnactxt: {
        fontSize: 15,
        color: 'white'
    },
    hrline: {
        borderBottomColor: 'red',
        borderBottomWidth: 5,
        marginTop: 20
    },
    h1: {
        fontWeight: 'bold'
    },
    h2: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold'
    },
    endline: {
        borderBottomColor: 'red',
        borderBottomWidth: 10,
        marginTop: 30
    }
});

export default Names11;