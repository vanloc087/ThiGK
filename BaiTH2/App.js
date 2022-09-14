import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableHighlightComponent } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number_a, onChangeNumber_a] = React.useState(null); 
  const [number_b, onChangeNumber_b] = React.useState(null); 
  const [result, tinh] = React.useState(null); 
  const refesh = ()=> {
    onChangeNumber_a(number_a => null);
    onChangeNumber_b(number_b => null);
    tinh( result => null)
  }
  const tong = ()=> {
    tinh( result => parseInt(number_a) + parseInt(number_b))
  }
  const thuong = ()=> {
    tinh( result => parseInt(number_a) / parseInt(number_b))
  }
  const hieu = ()=> {
    tinh( result => parseInt(number_a) - parseInt(number_b))
  }
  const tich = ()=> {
    tinh( result => parseInt(number_a) * parseInt(number_b))
  }
  return (
    <View style={styles.container}> 
      <Text>Bai 1</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber_a}
        value={number_a}
        placeholder="So a"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber_b}
        value={number_b}
        placeholder="So b"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Tong "
          onPress={tong}
        />
         <Button style={styles.button}
          title="Thuong "
          onPress={thuong}
        />
         <Button style={styles.button}
          title="Hieu "
          onPress={hieu}
        />
         <Button style={styles.button}
          title="Tich "
          onPress={tich}
        />
      </View>
      <Text style={styles.text}>Ket qua : {result}</Text>
      <View style={styles.buttonContainer}>
      <Button style={styles.buttonRefesh}
          title="Refresh "
          onPress={refesh}
        />
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
     marginTop:40
  },
  button: {
   marginTop:40,
   paddingRight:40,
   width: 300,
   alignContent: "space-around"
  },
  buttonRefesh: {
    paddingTop:100,
    paddingRight:40,
    width: 300,
    alignContent: "space-around"
   },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    marginTop:40,
    width: 400,
    // backgroundColor: '#ff0000',
    flexDirection: "row",
    justifyContent: "space-around"
   },
   text: {
    marginTop:40,
    color: '#ff0000',
    fontSize:40
   }
});

