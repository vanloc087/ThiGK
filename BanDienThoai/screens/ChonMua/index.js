import SizeContext from 'antd/lib/config-provider/SizeContext';
import Column from 'antd/lib/table/Column';
import React, {useState,useEffect} from "react";
import { StyleSheet, Text, View , Image, Button, Alert,Dimensions, TouchableOpacity} from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation,useRoute } from '@react-navigation/native';

export default function ChonMua(codeColor) {
  var width = Dimensions.get('window').width;
  const navigation = useNavigation(); 
  const [phoneColor, setColor] = useState(require('../../assets/vsmart_live_xanh.png'));
  var code = codeColor.route.params;
  useEffect(()=>{if(code == 0){
    setColor(require('../../assets/bac.png'));
  }
  if(code == 1){
    setColor(require('../../assets/vs_red_a_2.png'));
  }
  if(code == 2){
    setColor(require('../../assets/den.png'));
  }
  if(code == 3){
    setColor(require('../../assets/vsmart_live_xanh.png'));
  }
    
  },[code]);
  

  const buy = ()=> {
    Alert.alert("Đã mua")
  }

  return (
    <View style={styles.container}>
     <View style={styles.containerChild1}>
        <Image style={styles.img} source={phoneColor} />
     </View >
      <View style={styles.containerChild1}>
        <View style={styles.containerChild2}>
          <Text style={{fontSize:17}}>Điện Thoại VSmart Joy 3 - Hàng chính hãng</Text>
          <Rating imageSize={30} style={styles.reating}/>
          <Text style={{fontSize:17, marginLeft:25}}>(Xem 828 đánh giá)</Text>
          <Text style={{fontSize:23,fontWeight:'bold',marginTop:10}}>1.790.000 đ</Text>
          <Text style={{fontSize:19, marginLeft:25, textDecorationLine:'line-through',marginTop:10}}>1.790.000 đ</Text>
          <Text style={{fontSize:14,marginTop:20,fontWeight:'bold',color:'#ff4d4d'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Icon name="help-circle-outline" style={{fontSize:25,flex:1, marginLeft:20}}></Icon>
        </View>
        <View style={styles.containerChild1}>
          <TouchableOpacity style={styles.buttonChoseColor}>
                    <Text style={styles.textChose} onPress={() => navigation.navigate('ChonMau')}>4 MÀU - CHỌN MÀU </Text>
                    <Icon name="chevron-forward-outline" style={{fontSize:30,flex:1}}></Icon>
          </TouchableOpacity>         
        </View>
        <View style={{ flex:1,justifyContent:'flex-end',backgroundColor:'#fff'}}>
          <TouchableOpacity style={styles.buttonBuy} onPress={() => Alert.alert('Đã mua')}>
                    <Text style={styles.textBuy}>CHỌN MUA</Text>
          </TouchableOpacity>         
        </View>
      </View>
    </View>
  );
}
const setState = ({color})=> {
  setColor(color);
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',

  },
  img: {
    marginTop:40,
    width: 300,
    height: 350,
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
    height:100,
    backgroundColor: '#ff4d4d',
  },
  containerChild1: {
    flex:1,
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  containerChild2: {
    flex:1,
    marginLeft:20,
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    
  },
  reating: {
    marginTop:5,
  },
  btnBuy:{
    borderWidth: 4,
    borderColor: "#000",
  },
  buttonChoseColor:{
    backgroundColor: '#D1D1D1',
    width: '85%',
    flexDirection:'row',
    flexWrap:'nowrap',
    height: 40,
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center',
    marginVertical:10,
    borderRadius: 10,
    backgroundColor:'#FFF',
    borderColor:'#000',
    borderWidth:1,
    marginTop:30
  },
  buttonBuy:{
    backgroundColor: '#D1D1D1',
    width: '85%',
    flexDirection:'row',
    flexWrap:'nowrap',
    height: 55,
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center',
    marginVertical:10,
    borderRadius: 10,
    backgroundColor:'red',
    marginBottom:40
  },
textBuy:{
    textAlign:'center',
    fontSize: 25,
    color: '#fff',
    flex:9,
    fontWeight:'bold'
    
  },
  textChose:{
    textAlign:'center',
    fontSize: 20,
    color: '#000',
    flex:9,
    
  },
});
