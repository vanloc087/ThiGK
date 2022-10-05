import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import Login from './components/login';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.view1} ></View>
        <View style={styles.view2} >
          <Button style={styles.button} title='PROTFOLIO'></Button>
          <Button style={styles.button} title='HIRE ME'></Button>z820
        </View>
        <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#009900',
  },
  view1: {
    flex: 1,
    zIndex:1,
    backgroundColor: '#00b300',
  },
  view2: {
    flex: 2,
    zIndex:2,
    backgroundColor: '#85adad',
    justifyContent: 'flex-start'
    
  },
  button:{
    zIndex:2,
    width:20,
    position:'absolute'

  },
  tinyLogo: {
    flex: 1
  }
});
