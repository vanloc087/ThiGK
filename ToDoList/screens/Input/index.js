import React, {useState,useEffect} from "react";
import {  StyleSheet, Text, View , Image, Button, Alert,Dimensions, TouchableOpacity,SafeAreaView } from 'react-native';
function Input() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>TODO LIST</Text>
      <View style={{flexDirection:'row'}}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên môn học"
        keyboardType="text"
        onChangeText={(text)=> setText(text)}
      />
            <TouchableOpacity style={styles.btnAdd} onPress={() => { addItem(text);}}>
                    <Text style={styles.textBtn}>ADD</Text>
          </TouchableOpacity>    
          <TouchableOpacity style={styles.btnDelete} onPress={() => { deleteItems(props.items);}}>
                    <Text style={styles.textBtn}  >DELETE</Text>
          </TouchableOpacity>    
      </View>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      height:200,
      width: '100%',
      backgroundColor: '#ff4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      flex: 8,
      width: '100%',
      backgroundColor: '#f45',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });