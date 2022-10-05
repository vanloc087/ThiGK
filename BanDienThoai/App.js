import React, {useState,createContext} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet,SafeAreaView, Text, View, TextInput, TouchableHighlightComponent } from 'react-native';
import ChonMau from "./screens/ChonMau/index";
import MainNavigator from "./navigation";


const colorContext = createContext();

export default function App() {
  return (
    <MainNavigator>

    </MainNavigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
   
  }
});

