import React from 'react';
import { Text, View ,TouchableOpacity,StyleSheet, Image } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
// import * as Permissions from 'expo-permissions'; 
import {Camera} from 'expo-camera'; 

export default class BookTransactionScreen extends React.Component {

    constructor(){
        super();

        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:"",
            buttonState:"normal",
        }
        
    }

    getCameraPermissions=async()=>{
        const {status} = await Camera.requestPermissionsAsync()

        this.setState={
            /*
            status === "granted" is true when we have the permission, otherwise false
            */
            hasCameraPermissions:status === "granted",
            buttonState : "clicked",
            scanned : false,
        }
        
    }

    handleBarCodeScanned = async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:"normal"
        })
    }
    
    render(){

    const hasCameraPermissions=this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;
        
    if(buttonState==="clicked" && hasCameraPermissions){
       return(
           <BarCodeScanner 
           onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
       )
    }
    else if(buttonState==="normal"){
        return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
         <Text>{
                hasCameraPermissions === true ? this.state.scannedData : this.state.scannedData
                }
            </Text>

         <TouchableOpacity 
           onPress={this.getCameraPermissions} style={styles.scanButton}>
           <Text style = {styles.buttonText}>Scan Qr code</Text>
        </TouchableOpacity>
        </View>
        )
    }
    }

}

const styles=StyleSheet.create({

    buttonText:{ 
        fontSize:20,
    },

    scanButton:{
        margin:60,
        padding:10,
        backgroundColor:"pink",
    }

})