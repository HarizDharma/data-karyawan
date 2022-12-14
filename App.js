import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './navigasi/Home';
import Detail from './navigasi/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            title: "Data Karyawan",
            headerStyle: { backgroundColor:'#006aff' },
            headerTintColor: '#fff'
          }}/>
        <Stack.Screen name="Detail" component={Detail}
          options={{
            title: 'Detail Karyawan',
            headerStyle: { backgroundColor:'#006aff' },
            headerTintColor: '#fff'
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;