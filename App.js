

 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 
 import Login from './screens/Login';
 import Logout from './screens/Logout'
 
 const Stack = createStackNavigator();
 
 function App (){
   return(
     <NavigationContainer style = { styles.container }>
       <Stack.Navigator>
       <Stack.Screen name = 'Login'
                       component = { Login }/>
         <Stack.Screen name = 'Logout'
                       component = { Logout }/>                          
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 const styles = StyleSheet.create({
   container : {
     flex : 1,
     justifyContent : 'center',
     alignItems : 'center'
   }
 })
 
 export default App;
 