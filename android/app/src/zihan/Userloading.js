import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import axios from "axios";

class Uload extends Component{

    constructor(props) {
        super(props);
        this.state = {
            
            loading: true,
            isFetching: false,
            data: []
        };
    }
    
  async  myfunction(){
        const Apiurl = "http://10.0.2.2:8000/api/order/";
        let res = await fetch(Apiurl)
          let d = await res.json()
          this.setState({data: d.vorder})

        //  console.log(d.vorder);
         // console.log(d.vorder.name);

          if(d == 0){
            console.log("driver accepted");
            this.props.navigation.navigate('Route');
          }else {
            console.log("data in");
           
          }


      //  this.props.navigation.navigate('Route');
    }


    render(){

        const loading = this.state.loading;
     

        return(
            <View>
                
                <View style={styles.btn}>
                
                <Button onPress={()=>this.myfunction()} title="refresh"/>
                </View>
                
                <Image
                     style={styles.img1}
                     source={{uri: 'https://www.elegantthemes.com/blog/wp-content/uploads/2022/01/lazy-loading.png'}}
                    />
                   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img1: {
        width: 330,
        height: 450,
       // marginLeft: 30,
      },
      btn: {
        width: 100,
        marginLeft: 200
       // paddingLeft: 20
      }
});

export default Uload;