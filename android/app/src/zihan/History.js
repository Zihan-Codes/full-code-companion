import React, { Component, useState } from "react";
import axios from "axios";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Button, Alert } from "react-native";


class History extends Component{

   

    constructor(props) {
        super(props);
        this.state = {
            name: "kasun",
            isFetching: false,
            data: []
        };
    }

    getlist(id, sl, el, pn){

        
        order = {

            "id" : id,
            "slocation" : sl,
            "elocation" : el,
            "mobile" : pn
        }

        // Alert.alert(sl + id);
         //console.log(e);
       // this.props.navigation.navigate('Order', {id: id});
       // console.log(p1);

    }

    componentDidMount(){
        this.GetName();
    }

    async GetName(){

        const name = this.state.name;

        await axios.post('http://10.0.2.2:8000/api/get/name',{name:name}).then(res => this.setState({data: res.data.history}));
      console.log(this.state.data);
        
      /* const Apiurl = "http://10.0.2.2:8000/api/get/name";
        
      
        let res = await fetch(Apiurl) 

          let d = await res.json()
          this.setState({data: d.history})
         // console.log({data});
         console.log(d.history); */
         
         

       
    }

    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.h2}>Your Trips</Text>
                
                
                <FlatList
                
               data={this.state.data}
                renderItem = {({item})=>(
                   
                    <View>
                        <Text style={styles.datac}>
                            
                            <Text style={styles.h1}>{'\n'}Pickup Location: </Text>
                            {item.slocation}
                            
                            
                        <Text style={styles.h1}>{'\n'}Pickout Location: </Text>
                        {item.elocation}
                        <Text style={styles.h1}>{'\n'}Contact Number: </Text>
                
                {item.mobile}

                <Text style={styles.h1}>{'\n'}Name: </Text>
                {item.name}

                <Text style={styles.h1}>{'\n'}Date: </Text>
                {item.created_at} 
                
                </Text>
                
                
                <TouchableOpacity style={styles.btnact} onPress={() => this.getlist(item.id, item.slocation, item.elocation, item.phone)} >
                    <Text style={styles.btnactxt}>View Details</Text>
                    
                </TouchableOpacity>
                <View style={styles.hrline}/>
                    </View>
                )
                        
                
                    
                
               }
               
                />

                <View style={styles.vv}><Text></Text></View>
                
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
    },

    vv: {
        marginTop: 20,
    }
});

export default History;