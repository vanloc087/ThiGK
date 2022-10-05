import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Content } from 'antd/lib/layout/layout';
import { useState } from 'react';
import ChonMau from '../screens/ChonMau';
import ChonMua from '../screens/ChonMua';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChonMua" component={ChonMua} />
      <Stack.Screen name="ChonMau" component={ChonMau} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
     return(
        <NavigationContainer>
            <MyStack>

            </MyStack>
        </NavigationContainer>
        
     ) 
}

export default MainNavigator;