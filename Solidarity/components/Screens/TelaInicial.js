import React, { useState } from "react";
import { View,Text, TextInput,ScrollView, TouchableOpacity, Image} from "react-native";
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage';
import { stylesForm, stylesGenerics, stylesImagesForms} from "../../styles/styles";
import iconImage from "../../midias/images/telaInicial.jpg";

const TelaInicial = (props) =>{
    const {navigation} = props;

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [responseToken, setResponseToken] = useState('');
    const {setItem} = useAsyncStorage('credencials');
    
  async function getUserByEmail(){
      try{

          const response = await fetch(`http://192.168.15.16:8080/solidarityconnect/api/usuarios/email/${user}`,{
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${responseToken}`
              }
          });
          if (response.ok) {
              const data = await response.json();
              salvarItemComChave('id', `${data.idUsuario}`);
          } else {
          console.error('Erro na requisição:', response.status);
          }

      }catch(error){
          console.log(error);
      }finally{ 
          console.log('Fim get user by email');
      }
  }


    async function submit() {
        try {
          const response = await fetch('http:/192.168.15.16:8080/solidarityconnect/api/usuarios/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: `${user}`, senha: `${password}`})
          }).then(getUserByEmail()).then(passarPage());
      
          if (response.ok) {
            const data = await response.json();
            setResponseToken(data.token);
            setItem(data.token);
            console.log("TOKEN SALVO: " + data.token);
          } else {
            console.error('Erro na requisição:', response.status);
            setResponseToken('');
          }
        }catch (error) {
          console.error(error);
          setResponseToken('');
        }
      }

    async function salvarItemComChave(chave, valor) {
      try {
        await AsyncStorage.setItem(chave, valor);
        console.log('Item salvo com sucesso: ' + valor);
      } catch (error) {
        console.error('Erro ao salvar o item:', error);
      }
    }

      const passarPage = () =>{
        if (responseToken != ''){
          navigation.navigate('TelaLogado');
        }
      }


    return(
        <ScrollView>
          <View style={stylesGenerics.mainContainer}>

            <View style={stylesImagesForms.circleImage}>
              <Image source={iconImage} style={stylesImagesForms.image}></Image>
            </View>

              <View style={stylesForm.formWrapper}>

                <Text style={stylesForm.textLabel}>E-MAIL</Text>
                <TextInput placeholder="email@email.com"
                value={user}
                onChangeText={setUser}
                style={stylesForm.formField}
                ></TextInput>

                <Text style={stylesForm.textLabel}>SENHA</Text>
                <TextInput placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                style={stylesForm.formField}
                secureTextEntry={true}></TextInput>

                <Text style={stylesForm.textDetalis} onPress={() => navigation.navigate('TelaCadastro')}>Cadastre-se agora</Text>

                <View style={stylesForm.buttonSubmit}><TouchableOpacity><Text style={stylesForm.textButton} onPress={ submit }>→</Text></TouchableOpacity></View>

              </View>
          </View>

        </ScrollView>  
    )
}

export{TelaInicial};