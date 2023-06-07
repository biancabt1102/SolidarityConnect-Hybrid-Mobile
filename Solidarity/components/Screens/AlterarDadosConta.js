import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { stylesForm, stylesGenerics } from "../../styles/styles";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage"; 


const AlterarDadosConta = () =>{

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [cnpjUsuario, setCnpjUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('');

    const [userId, setUserId] = useState('');
    const [token, setToken] = useState ('');
    const {getItem} = useAsyncStorage('credencials');

    const[dataReponse, setDataResponse] = useState('');

    const obterItemDoAsyncStorage = async () => {
      try {
        const valor = await AsyncStorage.getItem('id');
        console.log(`O valor é: ${valor}`);
        setUserId(valor);
      } catch (erro) {
        console.error('Erro ao obter item do AsyncStorage:', erro);
      }
    };

    const loadToken =  async () => {
      let data = await getItem();
      obterItemDoAsyncStorage();
      setToken(data);
    };

    useEffect(() => {
      loadToken();
    }, []);
    

    async function getUserById(){
      try{
          const response = await fetch(`http://192.168.15.16:8080/solidarityconnect/api/usuarios/${userId}`,{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`  
            }
          });
          if (response.ok) {
              const data = await response.json();
              setDataResponse(data);
          } else {
          console.error('Erro na requisição:', response.statusText);
          }
      }catch(error){
          console.log(error)
      }finally{
        preencherForm();
      }
  }

  function preencherForm () {
    const user = dataReponse;
    setNomeUsuario(user.nomeUsuario);
    setEmailUsuario(user.emailUsuario);
    setSenhaUsuario(user.senhaUsuario);
    setCnpjUsuario(user.cnpjUsuario);
    setTelefoneUsuario(user.telefoneUsuario);
  }



    async function updateUser() {
      try {
        const url = `http://192.168.15.16:8080/solidarityconnect/api/usuarios/${userId}`;
        const userData = {
          idUsuario: userId,
          nomeUsuario: `${nomeUsuario}`,
          emailUsuario: `${emailUsuario}`,
          senhaUsuario: `${senhaUsuario}`,
          cnpjUsuario: `${cnpjUsuario}`,
          telefoneUsuario: `${telefoneUsuario}`,
        };
    
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          },
          body: JSON.stringify(userData),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Usuário atualizado com sucesso:', data);
        } else {
          console.error('Erro na requisição:', response.statusText);
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    }
    

    async function deleteUsuario() {
      const url = `http://192.168.15.16:8080/solidarityconnect/api/usuarios/${userId}`;
    
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          console.log('Usuário removido com sucesso.');
        } else {
          console.log('Erro ao remover usuário.');
        }
      } catch (error) {
        console.log('Ocorreu um erro na requisição:', error);
      }
    }


    return(
        <ScrollView>
          <Button title="carregar dados" onPress={getUserById}></Button>
          <View style={[stylesGenerics.mainContainer, stylesGenerics.initialPadding]}>
            <View style={stylesForm.formWrapper}>

              <Text style={stylesForm.textLabel}>Nome</Text>
              <TextInput placeholder="nome" value={nomeUsuario} onChangeText={setNomeUsuario} style={stylesForm.formField}></TextInput>

              <Text style={stylesForm.textLabel}>E-mail</Text>
              <TextInput placeholder="email" value={emailUsuario} onChangeText={setEmailUsuario} style={stylesForm.formField}></TextInput>

              <Text style={stylesForm.textLabel}>cnpj</Text>
              <TextInput placeholder="cnpj" value={cnpjUsuario} onChangeText={setCnpjUsuario} style={stylesForm.formField}></TextInput>

              <Text style={stylesForm.textLabel}>Telefone</Text>
              <TextInput placeholder="telefone" value={telefoneUsuario} onChangeText={setTelefoneUsuario} style={stylesForm.formField}></TextInput>

              <Text style={stylesForm.formButton} onPress={updateUser}>ENVIAR</Text>
              <Text style={stylesGenerics.deleteButton} onPress={deleteUsuario}>EXCLUIR</Text>
              
            </View>
          </View>
        </ScrollView>
    )
}


export {AlterarDadosConta}