import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../../screens/Main';
import Input from '../../screens/Input';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Input" component={Input} />
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