import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, FlatList, TouchableOpacity } from "react-native";
import { stylesGenerics, stylesVerComidasScreen } from "../../styles/styles";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardFood } from "../parts/CardFood";




const TelaVerComidas = () =>{
    const {getItem} = useAsyncStorage('credencials');
    const [dataReponse, setDataResponse] = useState ('');
    const[token, setToken] = useState('');
    const [email,setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [listComidas, setListComidas] = useState([]);

    

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
        setToken(data);
    };

    useEffect(() => {
        loadToken();
        obterItemDoAsyncStorage();
    }, []);

    async function getComidasByUserId(){
        try{

            const response = await fetch(`http://192.168.15.16:8080/solidarityconnect/api/alimento/idusuario/${userId}`,{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setDataResponse(JSON.stringify(data));
                setListComidas(JSON.parse(dataReponse));
            } else {
            console.error('Erro na requisição:', response.statusText);
            }
        }catch(error){
            console.log(error)
        }
    }

  /*  async function getUserByEmail(){
        console.log(`email: ${email} do getUser`)
        console.log(token);
        try{

            const response = await fetch(`http://192.168.15.16:8080/solidarityconnect/api/usuarios/email/${email}`,{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUserId(data.idUsuario);
            } else {
            console.error('Erro na requisição:', response.status);
            }

        }catch(error){
            console.log(error)
        }finally{ 
            console.log('Fim get user by email');
        }
    }*/


    return(
        
            <View style={stylesGenerics.mainContainer}>
                <FlatList
                data={listComidas}
                renderItem={({item}) => (
                    <CardFood item={item} token={token}/>
                  )}
                />

                <Button title="CLIQUE AQUI PARA CARREGAR OS DADOS" onPress={getComidasByUserId}></Button>
            </View>
        
    )
}

export {TelaVerComidas};