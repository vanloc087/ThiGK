import React, {useState} from "react";
import { Button, StyleSheet, Text, View,Image, TextInput, TouchableOpacity,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import styles from './index.css'


export default function ChonMau() {
 
const navigation = useNavigation(); 
const [phoneColor, setColor] = useState(require('../../assets/vsmart_live_xanh.png'));
const [codeColor, setCodeColor] = useState(0);
const getRed = () =>{
  setColor(require('../../assets/vs_red_a_2.png'));
  setCodeColor(1);
} 
const getSilver = () =>{
  setColor(require('../../assets/bac.png'));
  setCodeColor(0);
} 
const getBlack = () =>{
  setColor(require('../../assets/den.png'));
  setCodeColor(2);
} 
const getBlue = () =>{
  setColor(require('../../assets/vsmart_live_xanh.png'));
  setCodeColor(3);
} 
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerChild1}>
            <Image style={styles.img} source={phoneColor} />
            <Text style={styles.title}>Điện thoại Vsmart Joy 3 {'\n'}Hàng chính hãng </Text>
        </View>
        <View style={styles.containerChild2}>
            <Text style={styles.txtChoseColor}>Chọn một màu bên dưới:</Text>
            <TouchableOpacity style={styles.buttonColor1} onPress={getSilver}>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.buttonColor2} onPress={getRed}>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.buttonColor3} onPress={getBlack}>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.buttonColor4} onPress={getBlue}>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.buttonChoose} onPress={()=>{navigation.navigate('ChonMua',codeColor);}}>
                <Text style={styles.textChoose}>Xong</Text>
            </TouchableOpacity>   
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    containerChild1: {
        flex: 3,
        flexDirection:'row'

    },
    containerChild2: {
        flex: 7,
        backgroundColor:'#C4C4C4',
        alignItems:'center',
        justifyContent: 'flex-start'
    },
    img: {
        marginTop:40,
        marginLeft:5,
        width: 160,
        height: 200,
        resizeMode: 'stretch',
    },
    title: {
        marginTop:60,
        marginLeft:5,
        fontSize:16,
        resizeMode: 'stretch',
    },
    txtChoseColor: {
        marginRight:160,
        marginTop:10,
        fontSize:20,
    },
    buttonColor1:{
        backgroundColor: '#D1D1D1',
        width: 85,
        flexDirection:'row',
        flexWrap:'nowrap',
        height: 85,
        display: 'flex',
        backgroundColor:'#C5F1FB',
        marginTop:20
      },
      buttonColor2:{
        backgroundColor: '#D1D1D1',
        width: 85,
        flexDirection:'row',
        flexWrap:'nowrap',
        height: 85,
        display: 'flex',
        backgroundColor:'red',
        marginTop:20
      },
      buttonColor3:{
        backgroundColor: '#D1D1D1',
        width: 85,
        flexDirection:'row',
        flexWrap:'nowrap',
        height: 85,
        display: 'flex',
        backgroundColor:'black',
        marginTop:20
      },
      buttonColor4:{
        backgroundColor: '#D1D1D1',
        width: 85,
        flexDirection:'row',
        flexWrap:'nowrap',
        height: 85,
        display: 'flex',
        backgroundColor:'blue',
        marginTop:20
      },
      buttonChoose:{
        backgroundColor: '#D1D1D1',
        width: '85%',
        flexDirection:'row',
        marginTop:40,
        flexWrap:'nowrap',
        height: 55,
        display: 'flex',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:10,
        borderRadius: 10,
        backgroundColor:'#1952E294',
        marginBottom:40
      },
      textChoose:{
        textAlign:'center',
        fontSize: 25,
        color: '#fff',
        flex:9,
        fontWeight:'bold'
        
      },

  });