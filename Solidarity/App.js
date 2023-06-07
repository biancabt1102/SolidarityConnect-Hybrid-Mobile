/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import { Cadastro } from './components/Screens/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TelaLogado } from './components/Screens/TelaLogado';
import { TelaInicial } from './components/Screens/TelaInicial';
import { CadastrarComida } from './components/Screens/CadastrarComida';
import { AlterarDadosConta } from './components/Screens/AlterarDadosConta';
import { TelaVerComidas } from './components/Screens/TelaVerComidas';


const Stack = createNativeStackNavigator(); 
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#72B5A5',
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}>
          
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{title:'LOGIN'}}/>
        <Stack.Screen name='TelaLogado' component={TelaLogado} options={{title:'MENU'}}/>
        <Stack.Screen name='TelaCadastro' component={Cadastro} options={{title:'CADASTRE-SE'}}/>
        <Stack.Screen name='TelaCadastroComida' component={CadastrarComida} options={{title:'CADASTRAR COMIDA'}}/>
        <Stack.Screen  name='AlterarDadosConta' component={AlterarDadosConta}options={{title:'ATUALIZAR SEUS DADOS'}}/>
        <Stack.Screen name='TelaVerComidas' component={TelaVerComidas} options={{title:'VER DOAÇÕES'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
