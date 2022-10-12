import React, {useState} from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import CheckboxCustom from "../Checkbox";
    
  
  export default function ListContent (props) {
    const callbackFunction = (childData) => {
      props.callbackDelete(childData);
    };
    
    const Item = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.title}>{item.content}</Text>
        <CheckboxCustom item = {item} parentCallback={callbackFunction} ></CheckboxCustom>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item item={item} />
    );  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data = {props.data}
          renderItem={renderItem}    
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
      position:'relative',
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      flexDirection: 'row',
      backgroundColor: '#f9c2ff',
      marginTop:5,
      width:300,
      alignItems:'center',
      justifyContent:'space-between',
    },
    title: {
      fontSize: 20,
     
    },
    id: {
      fontSize: 20,
      marginLeft:20,
    },
  });
  

