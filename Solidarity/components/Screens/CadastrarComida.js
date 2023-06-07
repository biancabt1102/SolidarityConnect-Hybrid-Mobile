import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView} from "react-native";
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import { stylesGenerics, stylesForm, stylesCadastroComidaScreen } from "../../styles/styles";


const CadastrarComida = () => {
    const [nomeAlimento, setNomeAlimento] = useState('');
    const [validadeAlimento, setValidadeAlimento] = useState('');
    const [quantidadeAlimento, setQuantidadeAlimento] = useState('');
    const [tipoAlimento, setTipoAlimento] = useState('');
    const [dataReponse, setDataResponse] = useState();
    const {getItem} = useAsyncStorage('credencials');
    const [token, setToken] = useState('');
    const [jsonValidadeAlimento, setJsonValidadeAlimento] = useState('');

    const [textStatus, setTextStatus] = useState('');

    const transformarData = () =>{
      dateString = validadeAlimento;
      let parts = dateString.split('/');
      let day = parseInt(parts[0], 10);
      let month = parseInt(parts[1], 10);
      let year = parseInt(parts[2], 10);
      if (day < 10){
        day = `0${day}`
      }
      if (month < 10){
        month = `0${month}`
      }

      console.log(`${year}-${month}-${day}`)
      
      setJsonValidadeAlimento(`${year}-${month}-${day}`);
    }


    const loadToken =  async () => {
        const data = await getItem();
        setToken(data);
      };

    

    useEffect(() => {
        loadToken();
      }, []);

    async function CadastrarComida() {
        try {
          const response = await fetch('http://192.168.15.16:8080/solidarityconnect/api/alimento', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              nomeAlimento: `${nomeAlimento}`,
              validadeAlimento:`${jsonValidadeAlimento}`,
              quantidadeAlimento: `${quantidadeAlimento}`,
              tipoAlimento: `${tipoAlimento}`
            })
          });
      
          if (response.ok) {
            const data = await response.json();
            setDataResponse(data);
            setTextStatus(`${data.nomeAlimento} foi cadastrado com sucesso!`)
          } else {
            console.error('Erro na requisição:', response.status);
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
    }

    return(
      <ScrollView>
        <View style={stylesGenerics.mainContainer}> 
          
          <View style={[stylesForm.formWrapper, stylesCadastroComidaScreen.formWrapper]}>

            <Text style={stylesForm.textLabel}>NOME: *</Text>
            <TextInput placeholder="Nome do Alimento" value={nomeAlimento} onChangeText={setNomeAlimento} style={stylesForm.formField}/>

            <Text style={stylesForm.textLabel}>DATA DE VALIDADE: </Text>
            <TextInput placeholder="DD/MM/YYYY" value={validadeAlimento} onChangeText={(valor) => valor.length === 11 ? transformarData() : setValidadeAlimento(valor)} style={stylesForm.formField}/>

            <Text style={stylesForm.textLabel}>Quantiadde: *</Text>
            <TextInput placeholder="Quantidade do Alimento" value={quantidadeAlimento} onChangeText={setQuantidadeAlimento} style={stylesForm.formField}/>

            <Text style={stylesForm.textLabel}>TIPO DE ALIMENTO: </Text>
            <TextInput placeholder="Tipo do Alimento" value={tipoAlimento} onChangeText={setTipoAlimento} style={stylesForm.formField}/>  


            <Text style={stylesCadastroComidaScreen.formButton} onPress={CadastrarComida}>ENVIAR</Text>
            <Text>{textStatus}</Text>
          </View>
          
        </View>
      </ScrollView>
    )
}


export{CadastrarComida};