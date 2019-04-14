/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NFC, {NfcDataType, NdefRecordType} from "react-native-nfc";


// const instructions = Plcenteratform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
    this.state={
      nfcID: '',
      nfcDescription: ''
    }
  }

  updateOutput = (id, descr) =>{
    this.setState({nfcID: id, nfcDescription: descr});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>React Native NFC Reader</Text>
        <Text style={styles.instructions}>Tap an NFC tag against your phone to read its ID and description.</Text>
        <View style={styles.outputContainer}>
          <Text style={styles.outputTextStyle}>{this.state.nfcID}</Text>
          <Text style={styles.outputTextStyle}>{this.state.nfcDescription}</Text>
        </View>
      </View>
    );
  }

  componentDidMount(){
    this.bindNfcListener();
  }

  bindNfcListener(){
    NFC.addListener((payload) => {
      // switch (payload.type) {
            
      //     case NfcDataType.NDEF:
      //         let messages = payload.data;
      //         for (let i in messages) {
      //             let records = messages[i];
      //             for (let j in records) {
      //                 let r = records[j];
      //                 if (r.type === NdefRecordType.TEXT) {
      //                     // do something with the text data
      //                 } else {
      //                     ToastAndroid.show(
      //                         `Non-TEXT tag of type ${r.type} with data ${r.data}`,
      //                         ToastAndroid.SHORT
      //                     );
      //                 }
      //             }
      //         }
      //         break;
              
      //     case NfcDataType.TAG:
      //         ToastAndroid.show(
      //             `The TAG is non-NDEF:\n\n${payload.data.description}`,
      //             ToastAndroid.SHORT
      //         );
      //         break;
      // }
      this.updateOutput("NFC Tag ID: " + payload.data.id, "NFC Tag Description: " + payload.data.description);
      // alert("NFC tag ID: " + payload.data[0]);
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#1A1A1D',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 15,
    color: '#950740',
  },
  outputTextStyle: {
    textAlign: 'center',
    color: '#EDF5E1',
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    color: '#950740',
  },
  outputContainer: {
    textAlign: 'center', 
    marginTop: 10,
  },
});
