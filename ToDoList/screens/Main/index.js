import React, {useState,useEffect} from "react";
import {  StyleSheet, Text, View , Image, Button, Alert,Dimensions, TouchableOpacity,SafeAreaView } from 'react-native';
import Input from '../../components/Input/index'
import ListContent from '../../components/ListContent/index'
function Main() {
    const [DATA,setData] = useState([
        {
          id: 1,
          content: 'First Item',
        },
        {
          id: 2,
          content: 'Second Item',
        },
        {
          id: 3,
          content: 'Third tem',
        },
      ]);
      var DATADELETE = [];
      var DATADADD = [];
      const listSelect =[];
    
      const callDelete = (childData) => {
        if(parseInt(listSelect.indexOf(childData.id)) == -1){
          listSelect.push(childData.id);
        }else{
          listSelect.splice(listSelect.indexOf(childData.id),1);
        }
        console.log(listSelect);
    
    };
    
    
    
    const deleteItemsSelected = (arr)=>{
      for (let index = 0; index < DATA.length; index++) {
        DATADELETE.push(DATA[index]);
      }
      for (let i = 0; i < DATADELETE.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if(DATADELETE[i].id == parseInt(arr[j])){
            DATADELETE.splice(i,1);
          }
        }
      }
      setData(DATADELETE);
    }
    
    const addItem = (text)=>{
      for (let index = 0; index < DATA.length; index++) {
        DATADADD.push(DATA[index]);
      }
      let max = 0;
      for (let index = 0; index < DATADADD.length; index++) {
        if(max<DATADADD[index].id){
          max = DATADADD[index].id;
        }  
      }
      DATADADD.push({
        id: max+1,
        content: text,
      })
      setData(DATADADD);
    }
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Input items={listSelect} deleteItemsSelected={deleteItemsSelected} addItem={addItem}/>
          </View>
          <View style={styles.body}>
            <ListContent data={DATA} callbackDelete={callDelete}  ></ListContent>
          </View>
        </SafeAreaView>
        
      );
}

export default Main

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