// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/main/mainScreen.jsx';
import Inicial from './src/screens/inicial/inicial.jsx'; // Adjust the path as necessary

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">

        <Stack.Screen name="Main" component={MainScreen}
        headerBackButtonLabel="Voltar"
          options={{
            title: 'GC - Extras & Adicional',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'purple',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 30, color: 'purple' },
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen name="Inicial" component={Inicial} 
        options={{       
          animation: 'slide_from_left',   
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;