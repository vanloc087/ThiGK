import React, {useState} from "react";
import {  StyleSheet, Text, View ,TextInput, Image, Button, Alert,Dimensions, TouchableOpacity,SafeAreaView } from 'react-native';

function Input(props) {
  const [text,setText] = useState('');
  const deleteItems = (items) => {
    props.deleteItemsSelected(items);
  };

  const addItem = (text) => {
    console.log(text)
    props.addItem(text);
  };
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
      width: '100%',
      height:'100%',
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
    },
    body: {
      flex: 8,
      width: '100%',
      backgroundColor: '#f45',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        width:'100%',
        marginTop:40,
        marginRight:10,
        textAlign: 'center',
        fontSize:20,
        backgroundColor:'#fff',
        color:'blue',
        fontWeight:'bold',

    },
    input: {
        width:'50%',
        marginRight:10,
        marginTop:20,
        fontSize:20,
        textAlign: 'center',
        fontWeight:'bold',
        borderBottomWidth:1,
    },
    btnDelete:{
        marginTop:20,
        marginLeft:10,
        backgroundColor: 'red',
        width: '20%',
        flexDirection:'row',
        flexWrap:'nowrap',
        height: 40,
        display: 'flex',
        alignItems:'center',
        borderRadius: 10,
      },
      btnAdd:{
        marginTop:20,
        backgroundColor: 'green',
        width: '20%',
        flexDirection:'row',
        flexWrap:'nowrap',
        height: 40,
        display: 'flex',
        alignItems:'center',
        borderRadius: 10,
      },
      textBtn:{
        textAlign:'center',
        fontSize: 15,
        color: '#fff',
        flex:9, 
      },
  });
  