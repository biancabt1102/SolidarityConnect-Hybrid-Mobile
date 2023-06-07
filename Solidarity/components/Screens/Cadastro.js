import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { stylesForm, stylesGenerics } from "../../styles/styles";

const Cadastro = () => {

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [cnpjUsuario, setCnpjUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('');

    const [cep,setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [uf, setUf] = useState('');
    const [complemento, setComplemento] = useState('');

    const [dataReponse, setDataResponse] = useState();

    async function cadastrar(){
      try{
        const response = await fetch ('http://192.168.15.16:8080/solidarityconnect/api/usuarios/cadastro', {method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nomeUsuario: `${nomeUsuario}`,
          emailUsuario: `${emailUsuario}`,
          senhaUsuario: `${senhaUsuario}`,
          cnpjUsuario: `${cnpjUsuario}`,
          telefoneUsuario: `${telefoneUsuario}`
          })
        });
        if (response.ok){
          const data = await response.json()
          setDataResponse(data);
        }else {
          console.error();
        }

      }catch (error){
        console.error('Erro na requisição:', response.status);
      }finally{
        cadastrarEndereco();
      };


    }

    async function cadastrarEndereco(){
        () => {setNumero(parseInt(numero))};
      try{
        const response = await fetch ('http://192.168.15.16:8080/solidarityconnect/api/endereco', {method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          logradouroEndereco: `${logradouro}`,
          numeroEndereco: numero,
          cepEndereco: `${cep}`,
          bairroEndereco: `${bairro}`,
          ufEndereco: `${uf}`,
          complementoEndereco: `${complemento}`
          })
        });
        if (response.ok){
          const data = await response.json()
          setDataResponse(data);
        }else {
          console.error();
        }

      }catch (error){
        console.error('Erro na requisição:', response.status);
      };
    }

    const formatarTelefone = (valor) => {
      if (valor.length === 1) {
        setTelefoneUsuario('(' + valor);
      }else if(valor.length === 3){
        setTelefoneUsuario(valor + ') ')
      }else if (valor.length === 10){
        setTelefoneUsuario(valor + '-')
      }
      
      
      else {
        setTelefoneUsuario(valor);
      }
    };

    const formatarCep = (valor) => {
      if (valor.length === 5){
        setCep(valor + '-')
      }else{
        setCep(valor);
      }
    }
    const validarEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailUsuario === '') {
        Alert.alert('Erro', 'Por favor, preencha o campo de e-mail');
      } else if (!emailRegex.test(emailUsuario)) {
        Alert.alert('Erro', 'E-mail inválido');
      } else {
        Alert.alert('Sucesso', 'E-mail válido');
      }
    };
  



    return(
      <ScrollView>
          <View style={[stylesGenerics.mainContainer, stylesGenerics.initialPadding]}>
            <View style={stylesForm.formWrapper}>

              <Text style={stylesForm.textLabel}>Nome</Text>
              <TextInput placeholder="Pizzaria do João" value={nomeUsuario} onChangeText={setNomeUsuario} style={stylesForm.formField}></TextInput>

              <Text style={stylesForm.textLabel}>E-mail</Text>
              <TextInput placeholder="email@email.com" value={emailUsuario} onChangeText={setEmailUsuario} style={stylesForm.formField}
              keyboardType="email-address"
              autoCapitalize="none"></TextInput>

              <Text style={stylesForm.textLabel}>Senha</Text>
              <TextInput value={senhaUsuario} onChangeText={setSenhaUsuario} style={stylesForm.formField}
              secureTextEntry={true}></TextInput>

              <Text style={stylesForm.textLabel}>cnpj</Text>
              <TextInput placeholder="99.999.999/0001-99" value={cnpjUsuario} onChangeText={setCnpjUsuario} style={stylesForm.formField}
              ></TextInput>

              <Text style={stylesForm.textLabel} >Telefone</Text>
              <TextInput placeholder="(12) 7070-5050" value={telefoneUsuario} 
              onChangeText={formatarTelefone} style={stylesForm.formField}
              keyboardType="number-pad"></TextInput>

              <Text style={stylesForm.textLabel}>CEP</Text>
              <TextInput placeholder="03432-134" style={stylesForm.formField}
               onChangeText={formatarCep} value={cep}
               keyboardType="number-pad"></TextInput>

              <Text style={stylesForm.textLabel} >Logradouro</Text>
              <TextInput placeholder="R. Maria" style={stylesForm.formField} onChangeText={setLogradouro} value={logradouro}></TextInput>

              <Text style={stylesForm.textLabel}>Número</Text>
              <TextInput placeholder="23" style={stylesForm.formField} onChangeText={setNumero} value={numero}></TextInput>

              <Text style={stylesForm.textLabel}>Bairro</Text>
              <TextInput placeholder="Liberdade" style={stylesForm.formField} onChangeText={setBairro} value={bairro}></TextInput>

              <Text style={stylesForm.textLabel}>UF</Text>
              <TextInput placeholder="SP" style={stylesForm.formField} onChangeText={setUf} value={uf}></TextInput>

              <Text style={stylesForm.textLabel}>Complemento</Text>
              <TextInput placeholder="AP 220A" style={stylesForm.formField} onChangeText={setComplemento} value={complemento}></TextInput>

              <Text style={stylesForm.formButton} onPress={cadastrar}>ENVIAR</Text>
              
            </View>
          </View>
        </ScrollView>
    )
}

export {Cadastro};